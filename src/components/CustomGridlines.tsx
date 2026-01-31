/**
 * Custom gridlines component for Recharts with major and minor grid support.
 * Renders SVG lines at precise z-index positions to appear above background
 * but below the confidence band.
 */
import React from 'react';
import { calculateMinorGridPositions } from '../utils/chartUtils';
import {
  GRID_MAJOR_STROKE,
  GRID_MAJOR_STROKE_WIDTH,
  GRID_MAJOR_OPACITY,
  GRID_MINOR_STROKE,
  GRID_MINOR_STROKE_WIDTH,
  GRID_MINOR_OPACITY,
  GRID_X_MINOR_DIVISIONS,
  GRID_Y_MINOR_DIVISIONS,
} from '../constants/ui';

interface CustomGridlinesProps {
  xTicks: number[];           // Major tick positions for X-axis
  yTicks: number[];           // Major tick positions for Y-axis
  xDomain: [number, number];  // X-axis domain
  yDomain: [number, number];  // Y-axis domain
  width?: number;             // Chart width (optional, will use from Recharts context)
  height?: number;            // Chart height (optional, will use from Recharts context)
  margin?: { top: number; right: number; bottom: number; left: number };
  xMinorDivisions?: number;   // Default: 3 (monthly subdivisions)
  yMinorDivisions?: number;   // Default: 2 (5-point subdivisions)
  // Recharts scale functions and viewBox
  xScale?: (value: number) => number;
  yScale?: (value: number) => number;
  viewBox?: { x: number; y: number; width: number; height: number };
}

/**
 * CustomGridlines component renders major and minor gridlines as SVG lines.
 * Must be inserted after ReferenceArea but before Area components in Recharts.
 */
export const CustomGridlines: React.FC<CustomGridlinesProps> = ({
  xTicks,
  yTicks,
  xDomain,
  yDomain,
  width: providedWidth,
  height: providedHeight,
  margin: providedMargin,
  xMinorDivisions = GRID_X_MINOR_DIVISIONS,
  yMinorDivisions = GRID_Y_MINOR_DIVISIONS,
  xScale: providedXScale,
  yScale: providedYScale,
  viewBox,
}) => {
  // Use viewBox dimensions from Recharts if available, otherwise use provided values
  const width = viewBox?.width ?? providedWidth ?? 800;
  const height = viewBox?.height ?? providedHeight ?? 500;
  const margin = providedMargin ?? { top: 58, right: 20, bottom: 35, left: 5 };

  // Calculate chart drawable area
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Use provided scale functions from Recharts if available, otherwise calculate manually
  const xScaleFunc = providedXScale ?? ((value: number): number => {
    const domainRange = xDomain[1] - xDomain[0];
    return margin.left + ((value - xDomain[0]) / domainRange) * chartWidth;
  });

  const yScaleFunc = providedYScale ?? ((value: number): number => {
    const domainRange = yDomain[1] - yDomain[0];
    // Inverted for SVG coordinate system (top = 0, bottom = height)
    return margin.top + ((yDomain[1] - value) / domainRange) * chartHeight;
  });

  // Calculate minor gridline positions
  const minorXPositions = calculateMinorGridPositions(xTicks, xMinorDivisions);
  const minorYPositions = calculateMinorGridPositions(yTicks, yMinorDivisions);

  return (
    <g className="custom-gridlines">
      {/* Minor vertical gridlines (render first so major lines appear on top) */}
      {minorXPositions.map((x, i) => {
        const xPos = xScaleFunc(x);
        return (
          <line
            key={`minor-v-${i}`}
            x1={xPos}
            y1={margin.top}
            x2={xPos}
            y2={height - margin.bottom}
            stroke={GRID_MINOR_STROKE}
            strokeWidth={GRID_MINOR_STROKE_WIDTH}
            strokeOpacity={GRID_MINOR_OPACITY}
          />
        );
      })}

      {/* Minor horizontal gridlines */}
      {minorYPositions.map((y, i) => {
        const yPos = yScaleFunc(y);
        return (
          <line
            key={`minor-h-${i}`}
            x1={margin.left}
            y1={yPos}
            x2={width - margin.right}
            y2={yPos}
            stroke={GRID_MINOR_STROKE}
            strokeWidth={GRID_MINOR_STROKE_WIDTH}
            strokeOpacity={GRID_MINOR_OPACITY}
          />
        );
      })}

      {/* Major vertical gridlines */}
      {xTicks.map((x, i) => {
        const xPos = xScaleFunc(x);
        return (
          <line
            key={`major-v-${i}`}
            x1={xPos}
            y1={margin.top}
            x2={xPos}
            y2={height - margin.bottom}
            stroke={GRID_MAJOR_STROKE}
            strokeWidth={GRID_MAJOR_STROKE_WIDTH}
            strokeOpacity={GRID_MAJOR_OPACITY}
          />
        );
      })}

      {/* Major horizontal gridlines */}
      {yTicks.map((y, i) => {
        const yPos = yScaleFunc(y);
        return (
          <line
            key={`major-h-${i}`}
            x1={margin.left}
            y1={yPos}
            x2={width - margin.right}
            y2={yPos}
            stroke={GRID_MAJOR_STROKE}
            strokeWidth={GRID_MAJOR_STROKE_WIDTH}
            strokeOpacity={GRID_MAJOR_OPACITY}
          />
        );
      })}
    </g>
  );
};
