import { NextResponse } from 'next/server';
import type { SurveyResponse } from '@/lib/analyzeResults';

const SHEET_ID = '1IAXxw7RuswsVwdgATj8WjT67mnSYQLsledOx4tSSjhI';
const RANGE    = 'Sheet1!A:P';

function parseRow(row: string[]): SurveyResponse {
  const int = (v: string | undefined) => {
    const n = parseInt(v ?? '', 10);
    return isNaN(n) ? 0 : n;
  };

  return {
    responseId: row[0]  ?? '',
    timestamp:  row[1]  ?? '',
    q1:  row[2]  ?? '',
    q2:  row[3]  ?? '',
    q3:  row[4]  ?? '',
    q4:  int(row[5]),
    q5:  row[6]  ?? '',
    q6:  (row[7] ?? '').split(', ').map((s) => s.trim()).filter(Boolean),
    q7:  int(row[8]),
    q8:  row[9]  ?? '',
    q9:  (row[10] ?? '').split(' > ').map((s) => s.trim()).filter(Boolean),
    q10: int(row[11]),
    q11: row[12] ?? '',
    q12: int(row[13]),
    q13: row[14] ?? '',
    q14: row[15] ?? '',
  };
}

export async function GET() {
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'GOOGLE_SHEETS_API_KEY is not configured' },
      { status: 500 },
    );
  }

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/` +
    `${encodeURIComponent(RANGE)}?key=${apiKey}`;

  let sheetData: { values?: string[][] };
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `Google Sheets API error (${res.status})`, detail: text },
        { status: 502 },
      );
    }
    sheetData = await res.json();
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to reach Google Sheets';
    return NextResponse.json({ error: message }, { status: 502 });
  }

  const rows = sheetData.values ?? [];

  const responses: SurveyResponse[] = rows
    // Skip header row and any row whose first cell looks like a header or is empty
    .filter((row) => {
      const id = (row[0] ?? '').trim();
      return id !== '' && id !== 'responseId';
    })
    .map(parseRow);

  return NextResponse.json(
    { responses, count: responses.length, fetchedAt: new Date().toISOString() },
    {
      headers: {
        // Revalidate often enough that auto-refresh shows fresh data
        'Cache-Control': 'no-store',
      },
    },
  );
}
