import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const endpoint = process.env.FORM_ENDPOINT;

  if (!endpoint) {
    // Dev mode — echo the payload back so the survey still reaches the thank-you screen
    const body = await req.json();
    console.info('[submit] FORM_ENDPOINT not set — skipping forwarding.', body);
    return NextResponse.json({ status: 'ok', dev: true });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  try {
    const upstream = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    });

    // Google Apps Script returns 200 even for errors, but forward the status anyway
    const text = await upstream.text();
    let data: unknown;
    try { data = JSON.parse(text); } catch { data = text; }

    return NextResponse.json(data, { status: upstream.ok ? 200 : upstream.status });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Upstream request failed';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
