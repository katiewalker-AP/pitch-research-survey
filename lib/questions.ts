// ─────────────────────────────────────────────────────────────────────────────
// SURVEY CONTENT CONFIG
// Edit all question text, options, labels, and screen copy here.
// Question order, types, and section groupings are defined below.
// ─────────────────────────────────────────────────────────────────────────────

export type QuestionType =
  | 'MULTIPLE_CHOICE'
  | 'MULTI_SELECT'
  | 'SCALE_10'
  | 'RANK'
  | 'OPEN_TEXT';

export interface Question {
  id: string;
  type: QuestionType;
  sectionIndex: number;
  text: string;
  /** MULTIPLE_CHOICE and MULTI_SELECT */
  options?: string[];
  /** SCALE_10 */
  scaleLabels?: { left: string; right: string };
  /** OPEN_TEXT */
  placeholder?: string;
  /** RANK — the draggable items */
  rankItems?: string[];
}

// ─── Section labels ───────────────────────────────────────────────────────────

export const SECTIONS: { label: string; shortLabel: string }[] = [
  { label: 'Your current pitch process', shortLabel: 'Pitch process' },
  { label: 'Content & structure',        shortLabel: 'Content & structure' },
  { label: 'Brand & app experience',     shortLabel: 'Brand & app' },
];

// ─── Intro screen ─────────────────────────────────────────────────────────────

export const INTRO = {
  heading:      "Help us build something you'll actually use",
  body:         "This takes 4 minutes. Your answers will directly shape the pitch deck tool we're building for the sales team — the more honest you are, the better it'll work for you.",
  timeEstimate: '4 minutes',
  journeySteps: ['Your pitch process', 'Content & structure', 'Brand & app'],
  cta:          "Let's go →",
};

// ─── Pitch deck preview screen (interstitial before Q10) ──────────────────────

export const PREVIEW = {
  heading:         'First, take a look at the app',
  body:            "This is the live pitch deck tool. Before answering the next few questions, click the Client Preview tab at the top of the app — that's exactly what your customer sees when they receive a pitch. Take a moment to explore it as if you're the prospect.",
  url:             'https://apdynamicdeck.lovable.app',
  fullscreenLabel: 'Open in full screen ↗',
  cta:             'Continue to questions →',
  fallbackMessage: 'Click below to open the pitch deck in a new tab — then come back here to continue.',
};

// ─── Thank-you screen ─────────────────────────────────────────────────────────

export const THANK_YOU = {
  heading: 'Thanks — this really helps.',
  body:    "Your answers will feed directly into the next version of the pitch deck app. We'll share what we find with the team.",
};

// ─── 14 questions ─────────────────────────────────────────────────────────────

export const QUESTIONS: Question[] = [
  // ── Section 0: Your current pitch process (Q1–Q5) ──────────────────────────
  {
    id:           'q1',
    type:         'MULTIPLE_CHOICE',
    sectionIndex: 0,
    text:         'How do you currently create pitches or proposals for prospects?',
    options: [
      'PowerPoint or Keynote manually',
      'Google Slides',
      'A template someone else made',
      'A mix of different tools',
      "I don't use pitch decks",
    ],
  },
  {
    id:           'q2',
    type:         'MULTIPLE_CHOICE',
    sectionIndex: 0,
    text:         'How long does it typically take you to put a pitch together from scratch?',
    options: [
      'Under 30 minutes',
      '30–60 minutes',
      '1–2 hours',
      'Half a day',
      'Longer than that',
    ],
  },
  {
    id:           'q3',
    type:         'OPEN_TEXT',
    sectionIndex: 0,
    text:         'What is the most frustrating part of your current pitch process?',
    placeholder:  'Be honest — this is where we learn the most',
  },
  {
    id:           'q4',
    type:         'SCALE_10',
    sectionIndex: 0,
    text:         'How confident are you that your current pitches accurately reflect the Add People brand?',
    scaleLabels:  { left: 'Not at all confident', right: 'Completely confident' },
  },
  {
    id:           'q5',
    type:         'MULTIPLE_CHOICE',
    sectionIndex: 0,
    text:         "Have you ever lost a deal or felt underprepared because your pitch wasn't strong enough visually or structurally?",
    options: ['Yes definitely', 'Probably', 'Not sure', 'No'],
  },

  // ── Section 1: Content & structure (Q6–Q9) ─────────────────────────────────
  {
    id:           'q6',
    type:         'MULTI_SELECT',
    sectionIndex: 1,
    text:         'Which sections do you find most useful to include in a pitch? Select all that apply.',
    options: [
      "The prospect's current situation",
      'Our recommended solution',
      'Pricing breakdown',
      'Timeline',
      'Case studies and social proof',
      'Team credentials',
      'ROI projections',
      'A personalised opening hook',
    ],
  },
  {
    id:           'q7',
    type:         'SCALE_10',
    sectionIndex: 1,
    text:         'How important is it that a pitch feels personalised to the specific prospect?',
    scaleLabels:  { left: 'Generic is fine', right: 'Personalisation is everything' },
  },
  {
    id:           'q8',
    type:         'OPEN_TEXT',
    sectionIndex: 1,
    text:         'What content do you wish you had easier access to when building a pitch?',
    placeholder:  'e.g. case studies, competitor insights, pricing tools...',
  },
  {
    id:           'q9',
    type:         'RANK',
    sectionIndex: 1,
    text:         'In what order should a pitch flow? Drag to reorder.',
    rankItems: [
      'Hook and opening',
      "Prospect's challenge",
      'Our solution',
      'Services and pricing',
      'Social proof and case studies',
      'Next steps',
    ],
  },

  // ── Section 2: Brand & app experience (Q10–Q14) ────────────────────────────
  {
    id:           'q10',
    type:         'SCALE_10',
    sectionIndex: 2,
    text:         'Having seen the dynamic pitch deck app, how well do you feel it represents the Add People brand?',
    scaleLabels:  { left: "Doesn't feel like us", right: 'Spot on' },
  },
  {
    id:           'q11',
    type:         'MULTIPLE_CHOICE',
    sectionIndex: 2,
    text:         'Which brand theme would you most want to use for client pitches?',
    options: [
      'Bold dark (dark background, strong contrast)',
      'Clean light (cream and white, minimal)',
      'High contrast (black and electric blue)',
      'Let me choose per pitch',
    ],
  },
  {
    id:           'q12',
    type:         'SCALE_10',
    sectionIndex: 2,
    text:         'How important is it that you can customise the pitch before sending — swapping colours, adjusting content, reordering sections?',
    scaleLabels:  { left: 'Just send it as is', right: 'Full control is essential' },
  },
  {
    id:           'q13',
    type:         'OPEN_TEXT',
    sectionIndex: 2,
    text:         'What would make you more likely to use this tool over your current process?',
    placeholder:  'What would need to be true for this to become your go-to?',
  },
  {
    id:           'q14',
    type:         'OPEN_TEXT',
    sectionIndex: 2,
    text:         'What is the one thing this app must do really well to be worth using?',
    placeholder:  'Your single most important requirement',
  },
];

// ─── Derived helpers ──────────────────────────────────────────────────────────

/** Indices of questions that are the first in a new section. */
export const SECTION_START_INDICES = [0, 5, 9];

/** Total number of survey questions. */
export const TOTAL_QUESTIONS = QUESTIONS.length; // 14

/** Seconds allocated per question for the time estimate. */
export const SECONDS_PER_QUESTION = 17;
