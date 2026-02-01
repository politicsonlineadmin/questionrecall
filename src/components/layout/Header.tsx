import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title?: string;
  meta?: string;
  showBack?: boolean;
}

export default function Header({ title = 'Essay Planner', meta, showBack = false }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className="border-b-grid px-5 py-4 flex justify-between items-baseline bg-main relative z-10">
      <div className="flex items-center gap-3">
        {showBack && !isHomePage && (
          <button
            onClick={() => navigate(-1)}
            className="tap-invert p-1 -ml-1"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}
        <div className="text-xs uppercase tracking-wide font-bold">
          {title}
        </div>
      </div>
      {meta && (
        <div className="text-xs font-mono tabular-nums">
          {meta}
        </div>
      )}
    </header>
  );
}
