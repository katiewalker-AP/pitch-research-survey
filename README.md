# Pitch App Research Survey — Add People

A brand and UX research survey built for the Add People sales team. Responses collected via a Google Form POST endpoint.

---

## What it is

A 14-question survey with one question per screen, a progress bar, and three sections:

1. **Your current pitch process** — how the team builds pitches today
2. **Content & structure** — what goes into a great pitch
3. **Brand & app experience** — feedback on the dynamic pitch deck prototype

---

## Running it locally

### 1. Install Node.js

If you haven't already, download Node.js from [nodejs.org](https://nodejs.org) — the LTS version is fine.

### 2. Open a terminal in this folder

On a Mac: right-click the `pitch-research-survey` folder in Finder and choose **Open in Terminal** (or New Terminal at Folder).

### 3. Install dependencies

```bash
npm install
```

This downloads all the packages the app needs. It only needs to be done once.

### 4. Set up your environment variable

Copy the example file:

```bash
cp .env.local.example .env.local
```

Open `.env.local` in a text editor and replace the placeholder URL with your real Google Apps Script endpoint:

```
FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec
```

> **Note:** The variable is `FORM_ENDPOINT` (no `NEXT_PUBLIC_` prefix) because submissions are forwarded server-side via an API route — the URL is never exposed to the browser. This also avoids CORS errors that occur when posting directly from the browser to Google Apps Script.

If you just want to test the survey locally without submitting, you can leave this blank — the API route will skip forwarding and the survey will still reach the thank-you screen.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The survey will be live.

---

## Editing questions

All survey questions, section labels, intro text, and screen copy live in one file:

```
lib/questions.ts
```

Open it in any text editor. Each question looks like this:

```ts
{
  id:          'q1',
  type:        'MULTIPLE_CHOICE',
  sectionIndex: 0,
  text:        'How do you currently create pitches or proposals?',
  options: [
    'PowerPoint or Keynote manually',
    'Google Slides',
    // ...
  ],
}
```

Save the file and the browser will hot-reload automatically.

---

## Deploying to Vercel

Vercel is the easiest way to deploy this — it's free for personal/small team use.

### First time setup

1. Go to [vercel.com](https://vercel.com) and sign up (or log in) with your GitHub account.
2. Push this project to a GitHub repository (or ask your developer to do this step).
3. In Vercel, click **Add New → Project** and import the repository.
4. On the configuration screen, Vercel will detect it's a Next.js app automatically.

### Adding your environment variable

Before clicking Deploy, expand **Environment Variables** and add:

| Name | Value |
|---|---|
| `FORM_ENDPOINT` | Your Google Apps Script URL |

### Deploy

Click **Deploy**. Vercel will build the app and give you a live URL (e.g. `pitch-research.vercel.app`) in about a minute.

Every time you push a change to the repository, Vercel will automatically redeploy.

---

## Setting up the Google Form endpoint

Because this survey posts JSON rather than a standard form submission, you need a **Google Apps Script Web App** to receive responses and write them to a Google Sheet.

### 1. Create a Google Sheet

Make a new Google Sheet — this is where responses will land.

### 2. Open Apps Script

In the Sheet, go to **Extensions → Apps Script**.

### 3. Paste this script

```js
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Write headers on first run
    if (sheet.getLastRow() === 0) {
      const headers = ['responseId', 'timestamp', ...Object.keys(data.answers)];
      sheet.appendRow(headers);
    }

    // Write response row
    const row = [data.responseId, data.timestamp, ...Object.values(data.answers).map(v =>
      Array.isArray(v) ? v.join(' | ') : String(v ?? '')
    )];
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 4. Deploy as Web App

Click **Deploy → New Deployment**. Set:
- **Type:** Web App
- **Execute as:** Me
- **Who has access:** Anyone

Copy the Web App URL — that's your `FORM_ENDPOINT`.

> **Important:** The Apps Script above joins multi-select answers with `" | "` and ranked answers with `" | "`. The results dashboard parser expects `", "` for multi-select (Q6) and `" > "` for ranking (Q9). To match, update the `join` calls in your Apps Script:
> ```js
> // For arrays (Q6 multi-select and Q9 rank):
> Array.isArray(v) && key === 'q6' ? v.join(', ') :
> Array.isArray(v) && key === 'q9' ? v.join(' > ') :
> Array.isArray(v) ? v.join(', ') : String(v ?? '')
> ```

> **Each time you change the Apps Script**, click **Deploy → Manage Deployments** and create a new version, then update the URL in your environment variable.

---

## Results dashboard

The dashboard lives at `/results` and shows live data from the Google Sheet.

### 1. Make the Google Sheet publicly viewable

Open the sheet → click **Share** → change access to **Anyone with the link** can **View**. This is required for the API key approach to work. The sheet remains read-only.

### 2. Create a Google Sheets API key

1. Go to [Google Cloud Console](https://console.cloud.google.com) and sign in.
2. Create a new project (or select an existing one).
3. In the left menu, go to **APIs & Services → Library**.
4. Search for **Google Sheets API** and click **Enable**.
5. Go to **APIs & Services → Credentials**.
6. Click **Create Credentials → API Key**.
7. Copy the key — that's your `GOOGLE_SHEETS_API_KEY`.
8. (Optional but recommended) Click the key → **Restrict key** → limit it to the Google Sheets API only.

### 3. Add it to your environment

In `.env.local`:
```
GOOGLE_SHEETS_API_KEY=AIzaSy_YOUR_KEY_HERE
```

In Vercel, add it under **Settings → Environment Variables**:

| Name | Value |
|---|---|
| `FORM_ENDPOINT` | Your Google Apps Script URL |
| `GOOGLE_SHEETS_API_KEY` | Your Google Cloud API key |

The dashboard auto-refreshes every 60 seconds. Visit `/results` — no login required.

---

## Project structure

```
pitch-research-survey/
├── app/
│   ├── api/
│   │   ├── submit/route.ts   — survey submission proxy (avoids CORS)
│   │   └── results/route.ts  — fetches rows from Google Sheets
│   ├── results/page.tsx      — results dashboard page
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── results/
│   │   ├── ResultsDashboard.tsx — main client: fetch, auto-refresh, tabs
│   │   ├── HorizontalBar.tsx    — stacked & ranked bar charts
│   │   ├── ScoreDisplay.tsx     — large score + pip gauge
│   │   ├── QuoteCard.tsx        — open text quote card
│   │   ├── WordCloud.tsx        — word frequency cloud
│   │   ├── MetricCard.tsx       — summary metric tile
│   │   ├── LoadingSkeleton.tsx
│   │   └── tabs/
│   │       ├── OverviewTab.tsx
│   │       ├── PitchProcessTab.tsx
│   │       ├── ContentStructureTab.tsx
│   │       └── BrandAppTab.tsx
│   ├── SurveyApp.tsx
│   ├── IntroScreen.tsx
│   ├── PreviewScreen.tsx
│   ├── ThankYouScreen.tsx
│   ├── ProgressHeader.tsx
│   ├── SectionTransition.tsx
│   ├── QuestionScreen.tsx
│   └── question-types/
│       ├── MultipleChoice.tsx
│       ├── MultiSelect.tsx
│       ├── Scale10.tsx
│       ├── Rank.tsx
│       └── OpenText.tsx
├── lib/
│   ├── questions.ts         — all survey content (edit here)
│   └── analyzeResults.ts    — pure analysis utilities
├── .env.local.example
└── README.md
```

---

## Brand tokens

| Token | Value |
|---|---|
| Cream | `#F7F5F2` |
| Deep Blue | `#173340` |
| Electric Blue | `#0A24E3` |
| Cyan | `#6DCCF2` |
| Orange | `#E3664F` |
| Yellow | `#FFCD63` |
| Border | `#e8e4de` |

Fonts: **Lexend** (body, labels) and **Playfair Display** (headings) — loaded from Google Fonts.
