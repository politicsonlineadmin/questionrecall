import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import PlanningPage from './pages/PlanningPage';
import ReviewPage from './pages/ReviewPage';
import ProgressPage from './pages/ProgressPage';
import FavoritesPage from './pages/FavoritesPage';
import SettingsPage from './pages/SettingsPage';

function AppContent() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isPlanningOrReview = location.pathname.includes('/planning') || location.pathname.includes('/review');

  if (isPlanningOrReview) {
    return (
      <Routes>
        <Route path="/planning/:questionId" element={<PlanningPage />} />
        <Route path="/review/:questionId" element={<ReviewPage />} />
      </Routes>
    );
  }

  return (
    <>
      {/* Mobile Nav */}
      <div className="mobile-nav">
        <div className="brand" style={{ textAlign: 'center', flex: 1, fontSize: '1.5rem', lineHeight: 1 }}>
          <span style={{ color: 'var(--c-accent)' }}>POLITICS</span><br />
          <span style={{ color: 'white' }}>ONLINE</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ fontSize: '1.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          padding: 'var(--s-2)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <nav className="nav-group">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              Practice
            </NavLink>
            <NavLink
              to="/progress"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              Progress
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              Saved
            </NavLink>
            <NavLink
              to="/settings"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              Settings
            </NavLink>
          </nav>
        </div>
      )}

      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div>
            <div className="brand" style={{ textAlign: 'center', fontSize: 'var(--s-5)', lineHeight: 0.9 }}>
              <span style={{ color: 'var(--c-accent)' }}>POLITICS</span><br />
              <span style={{ color: 'white' }}>ONLINE</span>
            </div>
            <nav className="nav-group">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Practice
              </NavLink>
              <NavLink
                to="/progress"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Progress
              </NavLink>
              <NavLink
                to="/favorites"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Saved
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Settings
              </NavLink>
            </nav>
          </div>

          <div className="meta-block">
            <div className="label">CURRENT BUILD</div>
            <div className="data-row">
              <span className="data-key">VER</span>
              <span>1.0.0</span>
            </div>
            <div className="data-row">
              <span className="data-key">ENV</span>
              <span>PROD</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
