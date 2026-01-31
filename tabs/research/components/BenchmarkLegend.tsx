import React from 'react';

interface LegendItemProps {
  benchmark: { key: string; title: string; color: string };
  isHighlighted: boolean;
  onClick: () => void;
}

const LegendItem: React.FC<LegendItemProps> = ({ benchmark, isHighlighted, onClick }) => (
  <div
    className={`frontier-legend__item ${!isHighlighted ? 'frontier-legend__item--dimmed' : ''}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    <span
      className="frontier-legend__indicator"
      style={{ backgroundColor: benchmark.color }}
    />
    <span className="frontier-legend__name">{benchmark.title}</span>
  </div>
);

interface BenchmarkLegendProps {
  benchmarks: Array<{ key: string; title: string; color: string }>;
  selectedBenchmarks: Set<string>;
  onToggle: (key: string) => void;
  dataPointCount?: number;
}

export default function BenchmarkLegend({
  benchmarks,
  selectedBenchmarks,
  onToggle,
  dataPointCount,
}: BenchmarkLegendProps): JSX.Element {
  return (
    <div className="frontier-legend">
      {dataPointCount !== undefined && (
        <div className="frontier-legend__count">{dataPointCount} Data Points</div>
      )}
      <div className="frontier-legend__title">Benchmarks</div>
      {benchmarks.map((benchmark) => (
        <LegendItem
          key={benchmark.key}
          benchmark={benchmark}
          isHighlighted={selectedBenchmarks.size === 0 || selectedBenchmarks.has(benchmark.key)}
          onClick={() => onToggle(benchmark.key)}
        />
      ))}
    </div>
  );
}
