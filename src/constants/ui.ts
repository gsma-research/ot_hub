/**
 * UI-related constants for leaderboard visualizations.
 */

/** Minimum TCI score used for bar width calculations */
export const TCI_MIN_SCORE = 90;

/** Default maximum TCI score used when calculating bar ranges */
export const TCI_DEFAULT_MAX = 150;

/** Minimum bar width percentage to ensure visibility */
export const MIN_BAR_WIDTH_PERCENT = 5;

/** Number of top rankings shown in hero/preview cards */
export const TOP_RANKINGS_COUNT = 3;

/** 60 days in milliseconds - standard padding for chart axes */
export const DATE_PADDING_MS = 60 * 24 * 60 * 60 * 1000;

/** Grid styling constants for custom gridlines */
export const GRID_MAJOR_STROKE = '#d4d0c8';        // Darker gray for major gridlines
export const GRID_MAJOR_STROKE_WIDTH = 1;
export const GRID_MAJOR_OPACITY = 0.6;

export const GRID_MINOR_STROKE = '#e5e5e5';        // Lighter gray for minor gridlines
export const GRID_MINOR_STROKE_WIDTH = 0.5;
export const GRID_MINOR_OPACITY = 0.3;

/** Grid subdivisions */
export const GRID_X_MINOR_DIVISIONS = 3;  // 3 months per quarter
export const GRID_Y_MINOR_DIVISIONS = 2;  // Split 10-point intervals into 5-point sub-intervals
