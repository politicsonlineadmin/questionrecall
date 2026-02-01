import { useState, useCallback } from 'react';
import ArgumentSection from './ArgumentSection';
import Card from '../ui/Card';
import { generateId, debounce } from '../../lib/utils';

interface Argument {
  id: string;
  title: string;
}

interface PlanningTemplateProps {
  planContent: string;
  onContentChange: (content: string) => void;
  readOnly?: boolean;
}

interface PlanData {
  argumentsFor: Argument[];
  argumentsAgainst: Argument[];
  introduction: string;
  conclusion: string;
  examples: string;
}

function parsePlanContent(content: string): PlanData {
  try {
    const parsed = JSON.parse(content);
    return {
      argumentsFor: parsed.argumentsFor || [{ id: generateId(), title: '' }],
      argumentsAgainst: parsed.argumentsAgainst || [{ id: generateId(), title: '' }],
      introduction: parsed.introduction || '',
      conclusion: parsed.conclusion || '',
      examples: parsed.examples || ''
    };
  } catch {
    return {
      argumentsFor: [{ id: generateId(), title: '' }],
      argumentsAgainst: [{ id: generateId(), title: '' }],
      introduction: '',
      conclusion: '',
      examples: ''
    };
  }
}

export default function PlanningTemplate({
  planContent,
  onContentChange,
  readOnly = false
}: PlanningTemplateProps) {
  const [planData, setPlanData] = useState<PlanData>(() =>
    parsePlanContent(planContent)
  );

  const debouncedSave = useCallback(
    debounce((data: PlanData) => {
      onContentChange(JSON.stringify(data));
    }, 500),
    [onContentChange]
  );

  const updatePlanData = (updates: Partial<PlanData>) => {
    const newData = { ...planData, ...updates };
    setPlanData(newData);
    debouncedSave(newData);
  };

  const addArgumentFor = () => {
    updatePlanData({
      argumentsFor: [...planData.argumentsFor, { id: generateId(), title: '' }]
    });
  };

  const addArgumentAgainst = () => {
    updatePlanData({
      argumentsAgainst: [...planData.argumentsAgainst, { id: generateId(), title: '' }]
    });
  };

  const removeArgumentFor = (id: string) => {
    if (planData.argumentsFor.length > 1) {
      updatePlanData({
        argumentsFor: planData.argumentsFor.filter((a) => a.id !== id)
      });
    }
  };

  const removeArgumentAgainst = (id: string) => {
    if (planData.argumentsAgainst.length > 1) {
      updatePlanData({
        argumentsAgainst: planData.argumentsAgainst.filter((a) => a.id !== id)
      });
    }
  };

  const updateArgumentFor = (id: string, title: string) => {
    updatePlanData({
      argumentsFor: planData.argumentsFor.map((a) =>
        a.id === id ? { ...a, title } : a
      )
    });
  };

  const updateArgumentAgainst = (id: string, title: string) => {
    updatePlanData({
      argumentsAgainst: planData.argumentsAgainst.map((a) =>
        a.id === id ? { ...a, title } : a
      )
    });
  };

  return (
    <div className="space-y-4">
      <Card variant="bordered" padding="md">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Introduction / Thesis
        </label>
        <textarea
          value={planData.introduction}
          onChange={(e) => updatePlanData({ introduction: e.target.value })}
          placeholder="Your main argument or thesis statement..."
          className="w-full min-h-[80px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          readOnly={readOnly}
        />
      </Card>

      <Card variant="bordered" padding="md">
        <ArgumentSection
          title="Arguments FOR"
          arguments={planData.argumentsFor}
          onAdd={addArgumentFor}
          onRemove={removeArgumentFor}
          onChange={updateArgumentFor}
          variant="for"
        />
      </Card>

      <Card variant="bordered" padding="md">
        <ArgumentSection
          title="Arguments AGAINST"
          arguments={planData.argumentsAgainst}
          onAdd={addArgumentAgainst}
          onRemove={removeArgumentAgainst}
          onChange={updateArgumentAgainst}
          variant="against"
        />
      </Card>

      <Card variant="bordered" padding="md">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Key Examples / Evidence
        </label>
        <textarea
          value={planData.examples}
          onChange={(e) => updatePlanData({ examples: e.target.value })}
          placeholder="Statistics, case studies, quotes, historical examples..."
          className="w-full min-h-[80px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          readOnly={readOnly}
        />
      </Card>

      <Card variant="bordered" padding="md">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Conclusion
        </label>
        <textarea
          value={planData.conclusion}
          onChange={(e) => updatePlanData({ conclusion: e.target.value })}
          placeholder="Your final judgement and synthesis..."
          className="w-full min-h-[80px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          readOnly={readOnly}
        />
      </Card>
    </div>
  );
}
