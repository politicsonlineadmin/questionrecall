import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../hooks/useQuestions';
import { useFilterStore } from '../stores/filterStore';
import { getFavorites } from '../lib/db';
import { PAPERS, TOPICS, DIFFICULTIES, MARK_ALLOCATIONS } from '../types';
import type { Question, Paper, Difficulty, MarkAllocation } from '../types';

export default function HomePage() {
  const navigate = useNavigate();
  const { questions, loading } = useQuestions();
  const {
    paper,
    topic,
    difficulty,
    markAllocation,
    setPaper,
    setTopic,
    setDifficulty,
    setMarkAllocation,
    resetFilters
  } = useFilterStore();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadFavorites = async () => {
      const favs = await getFavorites();
      setFavorites(new Set(favs));
    };
    loadFavorites();
  }, []);

  const topicOptions = paper !== 'all' ? TOPICS[paper as Paper] : [];
  const hasActiveFilters = paper !== 'all' || topic !== 'all' || difficulty !== 'all' || markAllocation !== 'all';

  const completedCount = favorites.size;
  const progressPercent = questions.length > 0 ? Math.round((completedCount / questions.length) * 100) : 0;

  const handleQuestionClick = (questionId: string) => {
    navigate(`/planning/${questionId}`);
  };

  // Get stats for cards
  const stats24Mark = questions.filter(q => q.mark_allocation === 24).length;
  const stats30Mark = questions.filter(q => q.mark_allocation === 30).length;

  return (
    <>
      {/* Header */}
      <header className="page-header">
        <div>
          <h1 className="page-title" style={{ fontSize: '2rem' }}>
            <span style={{ color: 'var(--c-accent)' }}>ESSAY</span><br />
            <span style={{ color: 'white' }}>SPEEDRUN</span>
          </h1>
        </div>
        <div className="header-meta">
          <div className="data-row">
            <span className="data-key">TOTAL</span>
            <span>{questions.length}</span>
          </div>
          <div className="data-row">
            <span className="data-key">DONE</span>
            <span>{completedCount}</span>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="content-grid">
        <div className="property-card">
          <div className="card-visual">?</div>
          <div className="card-content">
            <h2 className="card-header">{questions.length}<br />Questions</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">24M</span>
                <span>{stats24Mark}</span>
              </div>
              <div className="data-row">
                <span className="data-key">30M</span>
                <span>{stats30Mark}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="property-card accent">
          <div className="card-visual" style={{ opacity: 0.15 }}>%</div>
          <div className="card-content">
            <h2 className="card-header">{progressPercent}%<br />Complete</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">SAVED</span>
                <span>{favorites.size}</span>
              </div>
              <div className="data-row">
                <span className="data-key">LEFT</span>
                <span>{questions.length - completedCount}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="property-card dark">
          <div className="card-visual">#</div>
          <div className="card-content">
            <h2 className="card-header">Filter<br />Options</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">PAPERS</span>
                <span>{PAPERS.length}</span>
              </div>
              <div className="data-row">
                <span className="data-key">LEVELS</span>
                <span>{DIFFICULTIES.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="data-table-section">
        <div className="data-header">
          <h3>Filters</h3>
          <div style={{ display: 'flex', gap: 'var(--s-2)', alignItems: 'center' }}>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="label"
                style={{ cursor: 'pointer', marginBottom: 0 }}
              >
                CLEAR ALL
              </button>
            )}
          </div>
        </div>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 'var(--s-2)',
            marginBottom: 'var(--s-3)',
            padding: 'var(--s-2)',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '4px'
          }}>
            <div>
              <div className="label">Content</div>
              <select
                value={paper}
                onChange={(e) => setPaper(e.target.value as Paper | 'all')}
                style={{
                  width: '100%',
                  padding: 'var(--s-1)',
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'black',
                  fontSize: '0.9rem'
                }}
              >
                <option value="all">All Content</option>
                {PAPERS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="label">Topic</div>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={paper === 'all'}
                style={{
                  width: '100%',
                  padding: 'var(--s-1)',
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'black',
                  fontSize: '0.9rem',
                  opacity: paper === 'all' ? 0.5 : 1
                }}
              >
                <option value="all">All Topics</option>
                {topicOptions.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="label">Difficulty</div>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty | 'all')}
                style={{
                  width: '100%',
                  padding: 'var(--s-1)',
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'black',
                  fontSize: '0.9rem'
                }}
              >
                <option value="all">All</option>
                {DIFFICULTIES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="label">Marks</div>
              <select
                value={markAllocation === 'all' ? 'all' : String(markAllocation)}
                onChange={(e) => setMarkAllocation(e.target.value === 'all' ? 'all' : Number(e.target.value) as MarkAllocation)}
                style={{
                  width: '100%',
                  padding: 'var(--s-1)',
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'black',
                  fontSize: '0.9rem'
                }}
              >
                <option value="all">All</option>
                {MARK_ALLOCATIONS.map((m) => (
                  <option key={m} value={m}>{m} marks</option>
                ))}
              </select>
            </div>
          </div>
      </div>

      {/* Questions Table */}
      <div className="data-table-section" style={{ flex: 1 }}>
        <div className="data-header">
          <h3>Questions</h3>
          <span className="label" style={{ marginBottom: 0 }}>{questions.length} RESULTS</span>
        </div>

        {loading ? (
          <div style={{ padding: 'var(--s-4)', textAlign: 'center', opacity: 0.6 }}>
            Loading...
          </div>
        ) : questions.length === 0 ? (
          <div style={{ padding: 'var(--s-4)', textAlign: 'center' }}>
            <p style={{ opacity: 0.6, marginBottom: 'var(--s-2)' }}>No questions match your filters.</p>
            <button
              onClick={resetFilters}
              style={{
                padding: 'var(--s-1) var(--s-2)',
                background: 'var(--c-accent)',
                color: 'var(--c-text-dark)',
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div>
            {questions.map((question) => (
              <QuestionRow
                key={question.id}
                question={question}
                onClick={() => handleQuestionClick(question.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* System Bar */}
      <div className="system-bar">
        <span>SYSTEM STATUS: ONLINE</span>
        <span>MODE: PRACTICE</span>
      </div>
    </>
  );
}

function QuestionRow({
  question,
  onClick
}: {
  question: Question;
  onClick: () => void;
}) {
  const difficultyColor = question.difficulty === 'Foundation' ? '#2E7D32' :
    question.difficulty === 'Intermediate' ? '#F57C00' : '#C62828';

  return (
    <div className="table-row" onClick={onClick}>
      <span>
        <span className="status-dot" style={{ backgroundColor: difficultyColor }}></span>
        {question.topic}
      </span>
      <span style={{ opacity: 0.6 }}>{question.paper}</span>
      <span style={{ opacity: 0.6 }}>{question.difficulty}</span>
      <span style={{ textAlign: 'right', fontWeight: 700 }}>{question.mark_allocation}m</span>
    </div>
  );
}
