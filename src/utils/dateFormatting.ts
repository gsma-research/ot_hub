/**
 * Date formatting utilities for charts and display.
 * Release dates are sourced from leaderboard.json (single source of truth).
 */

/**
 * Format timestamp as quarter label for X-axis ticks (e.g., "Q1-24")
 */
export function formatMonthTick(timestamp: number): string {
  const date = new Date(timestamp);
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  const year = date.getFullYear().toString().slice(-2);
  return `Q${quarter}-${year}`;
}

/**
 * Format date for display on chart tooltips
 */
export function formatReleaseDate(timestamp: number): string {
  const date = new Date(timestamp);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${month}. ${year}`;
}
