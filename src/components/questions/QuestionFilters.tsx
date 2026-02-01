import { Filter, X } from 'lucide-react';
import Select from '../ui/Select';
import Button from '../ui/Button';
import { useFilterStore } from '../../stores/filterStore';
import { PAPERS, TOPICS, DIFFICULTIES, SOURCE_TYPES, MARK_ALLOCATIONS } from '../../types';
import type { Paper, Difficulty, SourceType, MarkAllocation } from '../../types';

interface QuestionFiltersProps {
  showAdvanced?: boolean;
}

export default function QuestionFilters({ showAdvanced = false }: QuestionFiltersProps) {
  const {
    paper,
    topic,
    difficulty,
    sourceType,
    markAllocation,
    setPaper,
    setTopic,
    setDifficulty,
    setSourceType,
    setMarkAllocation,
    resetFilters
  } = useFilterStore();

  const hasActiveFilters =
    paper !== 'all' ||
    topic !== 'all' ||
    difficulty !== 'all' ||
    sourceType !== 'all' ||
    markAllocation !== 'all';

  const paperOptions = [
    { value: 'all', label: 'All Papers' },
    ...PAPERS.map((p) => ({ value: p, label: p }))
  ];

  const topicOptions =
    paper !== 'all'
      ? [
          { value: 'all', label: 'All Topics' },
          ...TOPICS[paper as Paper].map((t) => ({ value: t, label: t }))
        ]
      : [{ value: 'all', label: 'Select a paper first' }];

  const difficultyOptions = [
    { value: 'all', label: 'All Difficulties' },
    ...DIFFICULTIES.map((d) => ({ value: d, label: d }))
  ];

  const sourceOptions = [
    { value: 'all', label: 'All Sources' },
    ...SOURCE_TYPES.map((s) => ({ value: s, label: s }))
  ];

  const markOptions = [
    { value: 'all', label: 'All Marks' },
    ...MARK_ALLOCATIONS.map((m) => ({ value: String(m), label: `${m} marks` }))
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-text-secondary">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="text-error"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Select
          options={paperOptions}
          value={paper}
          onChange={(e) => setPaper(e.target.value as Paper | 'all')}
        />
        <Select
          options={topicOptions}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          disabled={paper === 'all'}
        />
      </div>

      {showAdvanced && (
        <div className="grid grid-cols-3 gap-3">
          <Select
            options={difficultyOptions}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty | 'all')}
          />
          <Select
            options={sourceOptions}
            value={sourceType}
            onChange={(e) => setSourceType(e.target.value as SourceType | 'all')}
          />
          <Select
            options={markOptions}
            value={markAllocation === 'all' ? 'all' : String(markAllocation)}
            onChange={(e) =>
              setMarkAllocation(
                e.target.value === 'all' ? 'all' : (Number(e.target.value) as MarkAllocation)
              )
            }
          />
        </div>
      )}
    </div>
  );
}
