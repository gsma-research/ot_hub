# Leaderboard Layout Bug Handoff

## Problem
When clicking on questions in the "Example Questions" section on benchmark detail pages (e.g., `/leaderboard/telelogs`, `/leaderboard/telemath`), the leaderboard card above resizes/grows. This is especially noticeable with TeleMath questions.

**Expected behavior:** Only the questions section should expand; the leaderboard card should remain fixed.

## What's Been Done (Partial Fix)

### CSS Changes in `src/css/custom.css`:

1. **`.benchmark-content`** (line ~2828):
```css
.benchmark-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
```

2. **`.full-ranking-card`** (line ~2889):
```css
.full-ranking-card {
  padding: 24px 28px;
  flex-shrink: 0;
}
```

**Result:** These changes did NOT fully fix the issue. The leaderboard card still resizes.

## Root Cause Analysis Needed

The bug likely originates from one of these areas:

### 1. Component Structure (`src/components/BenchmarkDetailPage.tsx`)
```tsx
<div className="benchmark-detail-page">
  <div className="benchmark-content">
    {/* Leaderboard Card - THIS RESIZES */}
    <div className="leaderboard-card full-ranking-card">
      <div className="leaderboard-rankings">
        {rankings.map(...)}
      </div>
    </div>

    {/* Questions Section - EXPANDS ON CLICK */}
    <div className="benchmark-questions-section">
      <div className="questions-list">
        {questions.map(q => <QuestionCard ... />)}
      </div>
    </div>
  </div>
</div>
```

### 2. Relevant CSS Classes to Investigate

| Class | File Location | Purpose |
|-------|---------------|---------|
| `.benchmark-detail-page` | custom.css:2752 | Main container |
| `.benchmark-content` | custom.css:2828 | Content wrapper |
| `.leaderboard-card` | custom.css:1216 | Card styling |
| `.full-ranking-card` | custom.css:2889 | Full ranking variant |
| `.leaderboard-rankings` | custom.css:1256 | Rankings container |
| `.question-accordion` | custom.css:3725 | Expandable question |
| `.questions-list` | custom.css:3469 | Questions container |

### 3. TeleMath-Specific Issue
TeleMath uses `open-ended` question type which renders math via `dangerouslySetInnerHTML`:
```tsx
// BenchmarkDetailPage.tsx line ~66
function OpenEndedQuestionCard({ question, index }) {
  return (
    <div className="question-card question-card--open-ended">
      <p
        className="question-text question-text--math"
        dangerouslySetInnerHTML={{ __html: renderMathText(question.question) }}
      />
    </div>
  );
}
```

The math rendering might cause layout recalculation affecting parent containers.

## Likely Fixes to Try

### Option A: Isolate Rankings with Fixed Height
```css
.full-ranking-card {
  /* Try giving it a maximum height or containing its layout */
  contain: layout;  /* CSS containment */
}
```

### Option B: Prevent Rankings from Participating in Flex
```css
.leaderboard-rankings {
  /* Make sure this doesn't grow */
  flex-grow: 0;
  flex-shrink: 0;
}
```

### Option C: Use CSS Grid Instead of Flex
```css
.benchmark-content {
  display: grid;
  grid-template-rows: auto 1fr;  /* Card takes natural height, questions fill rest */
}
```

### Option D: Absolute Positioning for Questions Section
```css
.benchmark-questions-section {
  /* Take it out of normal flow */
  position: relative;
}
```

### Option E: Check for Dynamic Width Calculations
Look for any JavaScript that recalculates widths on expansion. The `RankingRow` component has bar widths that might be recalculating.

## Files to Examine

1. **`src/css/custom.css`** - All layout styles
2. **`src/components/BenchmarkDetailPage.tsx`** - Component structure and question rendering
3. **`src/components/RankingRow.tsx`** - Bar width calculations
4. **`src/components/LeaderboardCard.tsx`** - Card component

## Testing Steps

1. Run dev server: `cd ot_hub && npm run build && npm run serve -- --port 3001`
2. Navigate to `http://localhost:3001/leaderboard/telemath`
3. Click on any question to expand
4. Watch if the leaderboard card above changes size
5. Also test on `/leaderboard/telelogs`

## Git Status

Branch: `leaderboard-updates`
Latest commits:
- `4b080bf` - fix(leaderboard): prevent card resize when expanding questions (PARTIAL FIX)
- `951511c` - feat(leaderboard): add new sample questions to TeleMath and TeleLogs
- `3803e7b` - fix(leaderboard): scale benchmark bars to 100 max

## Quick Debug Approach

Add temporary debug styling to identify the culprit:
```css
.benchmark-content > * {
  outline: 2px solid red;
}
.leaderboard-card {
  outline: 2px solid blue;
}
.benchmark-questions-section {
  outline: 2px solid green;
}
```

Then click a question and visually see which container is resizing.
