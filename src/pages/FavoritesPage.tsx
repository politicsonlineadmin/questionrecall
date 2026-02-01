import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../hooks/useQuestions';
import { getFavorites } from '../lib/db';
import type { Question } from '../types';

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { questions, loading: questionsLoading } = useQuestions();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      const favIds = await getFavorites();
      setFavorites(favIds);
      setLoading(false);
    };
    loadFavorites();
  }, []);

  const favoriteQuestions: Question[] = questions.filter((q) =>
    favorites.includes(q.id)
  );

  const isLoading = loading || questionsLoading;

  return (
    <>
      {/* Header */}
      <header className="page-header">
        <div>
          <div className="label">BOOKMARKS</div>
          <h1 className="page-title">SAVED<br />QUESTIONS</h1>
        </div>
        <div className="header-meta">
          <div className="data-row">
            <span className="data-key">SAVED</span>
            <span>{favoriteQuestions.length}</span>
          </div>
          <div className="data-row">
            <span className="data-key">TOTAL</span>
            <span>{questions.length}</span>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="content-grid">
        <div className="property-card">
          <div className="card-visual">+</div>
          <div className="card-content">
            <h2 className="card-header">{favoriteQuestions.length}<br />Saved</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">24M</span>
                <span>{favoriteQuestions.filter(q => q.mark_allocation === 24).length}</span>
              </div>
              <div className="data-row">
                <span className="data-key">30M</span>
                <span>{favoriteQuestions.filter(q => q.mark_allocation === 30).length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="property-card accent">
          <div className="card-visual" style={{ opacity: 0.15 }}>%</div>
          <div className="card-content">
            <h2 className="card-header">{questions.length > 0 ? Math.round((favoriteQuestions.length / questions.length) * 100) : 0}%<br />Of Total</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">AVAIL</span>
                <span>{questions.length}</span>
              </div>
              <div className="data-row">
                <span className="data-key">LEFT</span>
                <span>{questions.length - favoriteQuestions.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="property-card dark">
          <div className="card-visual">#</div>
          <div className="card-content">
            <h2 className="card-header">By<br />Paper</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">UK POL</span>
                <span>{favoriteQuestions.filter(q => q.paper === 'UK Politics').length}</span>
              </div>
              <div className="data-row">
                <span className="data-key">UK GOV</span>
                <span>{favoriteQuestions.filter(q => q.paper === 'UK Government').length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Questions Table */}
      <div className="data-table-section" style={{ flex: 1 }}>
        <div className="data-header">
          <h3>Your Collection</h3>
          <span className="label" style={{ marginBottom: 0 }}>{favoriteQuestions.length} SAVED</span>
        </div>

        {isLoading ? (
          <div style={{ padding: 'var(--s-4)', textAlign: 'center', opacity: 0.6 }}>
            Loading...
          </div>
        ) : favoriteQuestions.length === 0 ? (
          <div style={{ padding: 'var(--s-4)', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', opacity: 0.2, marginBottom: 'var(--s-2)' }}>+</div>
            <p style={{ opacity: 0.6 }}>
              No saved questions yet. Complete a question to save it to your collection.
            </p>
          </div>
        ) : (
          <div>
            {favoriteQuestions.map((question) => {
              const difficultyColor = question.difficulty === 'Foundation' ? '#2E7D32' :
                question.difficulty === 'Intermediate' ? '#F57C00' : '#C62828';

              return (
                <div
                  key={question.id}
                  className="table-row"
                  onClick={() => navigate(`/planning/${question.id}`)}
                >
                  <span>
                    <span className="status-dot" style={{ backgroundColor: difficultyColor }}></span>
                    {question.topic}
                  </span>
                  <span style={{ opacity: 0.6 }}>{question.paper}</span>
                  <span style={{ opacity: 0.6 }}>{question.difficulty}</span>
                  <span style={{ textAlign: 'right', fontWeight: 700 }}>{question.mark_allocation}m</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* System Bar */}
      <div className="system-bar">
        <span>SYSTEM STATUS: ONLINE</span>
        <span>MODE: BOOKMARKS</span>
      </div>
    </>
  );
}
