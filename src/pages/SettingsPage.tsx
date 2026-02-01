import { useSettingsStore } from '../stores/settingsStore';
import { formatTime } from '../lib/utils';

export default function SettingsPage() {
  const {
    defaultTime24Mark,
    defaultTime30Mark,
    audioEnabled,
    hapticEnabled,
    warningTime,
    updateSettings,
    resetSettings
  } = useSettingsStore();

  const timeOptions = [
    { value: 180, label: '3 min' },
    { value: 300, label: '5 min' },
    { value: 420, label: '7 min' },
    { value: 600, label: '10 min' }
  ];

  const warningOptions = [
    { value: 30, label: '30 sec' },
    { value: 60, label: '1 min' },
    { value: 120, label: '2 min' }
  ];

  return (
    <>
      {/* Header */}
      <header className="page-header">
        <div>
          <div className="label">CONFIGURATION</div>
          <h1 className="page-title">APP<br />SETTINGS</h1>
        </div>
        <div className="header-meta">
          <div className="data-row">
            <span className="data-key">VER</span>
            <span>1.0.0</span>
          </div>
          <div className="data-row">
            <span className="data-key">ENV</span>
            <span>PROD</span>
          </div>
        </div>
      </header>

      {/* Timer Settings Card */}
      <div className="content-grid">
        <div className="property-card" style={{ height: 'auto', minHeight: '320px' }}>
          <div className="card-content">
            <h2 className="card-header">Timer<br />Settings</h2>

            {/* 24-mark timer */}
            <div style={{ marginBottom: 'var(--s-3)' }}>
              <div className="label">24-Mark Questions</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--s-1)' }}>
                {timeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateSettings({ defaultTime24Mark: option.value })}
                    style={{
                      padding: 'var(--s-2)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: defaultTime24Mark === option.value
                        ? 'var(--c-accent)'
                        : 'rgba(255,255,255,0.1)',
                      color: defaultTime24Mark === option.value
                        ? 'var(--c-text-dark)'
                        : 'white'
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 30-mark timer */}
            <div style={{ marginBottom: 'var(--s-3)' }}>
              <div className="label">30-Mark Questions</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--s-1)' }}>
                {timeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateSettings({ defaultTime30Mark: option.value })}
                    style={{
                      padding: 'var(--s-2)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: defaultTime30Mark === option.value
                        ? 'var(--c-accent)'
                        : 'rgba(255,255,255,0.1)',
                      color: defaultTime30Mark === option.value
                        ? 'var(--c-text-dark)'
                        : 'white'
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Warning time */}
            <div>
              <div className="label">Warning Alert</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--s-1)' }}>
                {warningOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateSettings({ warningTime: option.value })}
                    style={{
                      padding: 'var(--s-2)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: warningTime === option.value
                        ? 'var(--c-accent)'
                        : 'rgba(255,255,255,0.1)',
                      color: warningTime === option.value
                        ? 'var(--c-text-dark)'
                        : 'white'
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="property-card accent" style={{ height: 'auto', minHeight: '320px' }}>
          <div className="card-content">
            <h2 className="card-header">Current<br />Config</h2>
            <div className="card-footer" style={{ marginTop: 'var(--s-3)' }}>
              <div className="data-row">
                <span className="data-key">24M</span>
                <span>{formatTime(defaultTime24Mark)}</span>
              </div>
              <div className="data-row">
                <span className="data-key">30M</span>
                <span>{formatTime(defaultTime30Mark)}</span>
              </div>
              <div className="data-row">
                <span className="data-key">WARN</span>
                <span>{formatTime(warningTime)}</span>
              </div>
              <div className="data-row">
                <span className="data-key">SOUND</span>
                <span>{audioEnabled ? 'ON' : 'OFF'}</span>
              </div>
              <div className="data-row">
                <span className="data-key">HAPTIC</span>
                <span>{hapticEnabled ? 'ON' : 'OFF'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="property-card dark" style={{ height: 'auto', minHeight: '320px' }}>
          <div className="card-content">
            <h2 className="card-header">Alert<br />Options</h2>

            {/* Sound toggle */}
            <div
              onClick={() => updateSettings({ audioEnabled: !audioEnabled })}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--s-2) 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer'
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Sound Alerts</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Play sound when timer ends</div>
              </div>
              <div style={{
                width: '48px',
                height: '24px',
                background: audioEnabled ? 'var(--c-accent)' : 'rgba(255,255,255,0.2)',
                borderRadius: '2px',
                padding: '2px',
                transition: 'all 0.2s'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'white',
                  transform: audioEnabled ? 'translateX(24px)' : 'translateX(0)',
                  transition: 'all 0.2s'
                }} />
              </div>
            </div>

            {/* Haptic toggle */}
            <div
              onClick={() => updateSettings({ hapticEnabled: !hapticEnabled })}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--s-2) 0',
                cursor: 'pointer'
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Vibration</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Vibrate on mobile devices</div>
              </div>
              <div style={{
                width: '48px',
                height: '24px',
                background: hapticEnabled ? 'var(--c-accent)' : 'rgba(255,255,255,0.2)',
                borderRadius: '2px',
                padding: '2px',
                transition: 'all 0.2s'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'white',
                  transform: hapticEnabled ? 'translateX(24px)' : 'translateX(0)',
                  transition: 'all 0.2s'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Section */}
      <div className="data-table-section">
        <div className="data-header">
          <h3>Reset</h3>
          <span className="label" style={{ marginBottom: 0 }}>DANGER ZONE</span>
        </div>

        <button
          onClick={resetSettings}
          style={{
            width: '100%',
            padding: 'var(--s-2)',
            background: 'transparent',
            border: '2px solid rgba(255,255,255,0.2)',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          RESET TO DEFAULTS
        </button>
      </div>

      {/* System Bar */}
      <div className="system-bar">
        <span>SYSTEM STATUS: ONLINE</span>
        <span>MODE: SETTINGS</span>
      </div>
    </>
  );
}
