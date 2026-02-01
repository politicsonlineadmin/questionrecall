import { useAttempts, useAttemptStats } from '../hooks/useAttempts';
import { useQuestions } from '../hooks/useQuestions';
import { formatTimeVerbose } from '../lib/utils';

export default function ProgressPage() {
  const { attempts, loading: attemptsLoading } = useAttempts();
  const { questions, loading: questionsLoading } = useQuestions();
  const { totalAttempts, averageCoverage, averageConfidence, attemptsByDay } =
    useAttemptStats();

  const loading = attemptsLoading || questionsLoading;
  const recentDays = Object.entries(attemptsByDay).slice(-7);

  if (loading) {
    return (
      <>
        <header className="page-header">
          <div>
            <div className="label">ANALYTICS</div>
            <h1 className="page-title">YOUR<br />PROGRESS</h1>
          </div>
        </header>
        <div style={{ padding: 'var(--s-4)', textAlign: 'center', opacity: 0.6 }}>
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <header className="page-header">
        <div>
          <div className="label">ANALYTICS</div>
          <h1 className="page-title">YOUR<br />PROGRESS</h1>
        </div>
        <div className="header-meta">
          <div className="data-row">
            <span className="data-key">TOTAL</span>
            <span>{totalAttempts}</span>
          </div>
          <div className="data-row">
            <span className="data-key">AVG</span>
            <span>{averageCoverage}%</span>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="content-grid">
        <div className="property-card">
          <div className="card-visual">{totalAttempts}</div>
          <div className="card-content">
            <h2 className="card-header">Questions<br />Done</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">AVAIL</span>
                <span>{questions.length}</span>
              </div>
              <div className="data-row">
                <span className="data-key">RATE</span>
                <span>{questions.length > 0 ? Math.round((totalAttempts / questions.length) * 100) : 0}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="property-card accent">
          <div className="card-visual" style={{ opacity: 0.15 }}>{averageCoverage}%</div>
          <div className="card-content">
            <h2 className="card-header">Average<br />Coverage</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">TARGET</span>
                <span>70%</span>
              </div>
              <div className="data-row">
                <span className="data-key">GAP</span>
                <span>{Math.max(0, 70 - averageCoverage)}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="property-card dark">
          <div className="card-visual">{averageConfidence}/5</div>
          <div className="card-content">
            <h2 className="card-header">Confidence<br />Rating</h2>
            <div className="card-footer">
              <div className="data-row">
                <span className="data-key">SCALE</span>
                <span>1-5</span>
              </div>
              <div className="data-row">
                <span className="data-key">TREND</span>
                <span>Stable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="data-table-section">
        <div className="data-header">
          <h3>Daily Activity</h3>
          <span className="label" style={{ marginBottom: 0 }}>LAST 7 DAYS</span>
        </div>

        {recentDays.length > 0 ? (
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 'var(--s-1)',
            height: '120px',
            background: 'rgba(0,0,0,0.2)',
            padding: 'var(--s-2)',
            marginBottom: 'var(--s-3)'
          }}>
            {recentDays.map(([date, count]) => {
              const maxCount = Math.max(...recentDays.map(([, c]) => c));
              const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
              const shortDate = new Date(date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short'
              });

              return (
                <div key={date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{count}</span>
                  <div
                    style={{
                      width: '100%',
                      background: 'var(--c-secondary)',
                      height: `${Math.max(height, 8)}%`,
                      minHeight: '8px'
                    }}
                  />
                  <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>{shortDate}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{
            padding: 'var(--s-4)',
            textAlign: 'center',
            opacity: 0.6,
            background: 'rgba(0,0,0,0.2)',
            marginBottom: 'var(--s-3)'
          }}>
            Complete some questions to see your activity.
          </div>
        )}
      </div>

      {/* Recent Attempts */}
      <div className="data-table-section" style={{ flex: 1 }}>
        <div className="data-header">
          <h3>Recent Attempts</h3>
          <span className="label" style={{ marginBottom: 0 }}>{attempts.length} TOTAL</span>
        </div>

        {attempts.length > 0 ? (
          <div>
            {attempts.slice(0, 10).map((attempt) => {
              const question = questions.find((q) => q.id === attempt.question_id);
              const date = new Date(attempt.completed_at).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short'
              });

              return (
                <div key={attempt.id} className="table-row">
                  <span>
                    <span className="status-dot"></span>
                    {question?.topic || 'Unknown'}
                  </span>
                  <span style={{ opacity: 0.6 }}>{formatTimeVerbose(attempt.time_taken)}</span>
                  <span style={{ opacity: 0.6 }}>{date}</span>
                  <span style={{ textAlign: 'right', fontWeight: 700 }}>{attempt.coverage_score || 0}%</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ padding: 'var(--s-4)', textAlign: 'center', opacity: 0.6 }}>
            No attempts yet. Start practicing!
          </div>
        )}
      </div>

      {/* System Bar */}
      <div className="system-bar">
        <span>SYSTEM STATUS: ONLINE</span>
        <span>MODE: ANALYTICS</span>
      </div>
    </>
  );
}
