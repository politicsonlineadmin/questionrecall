import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Practice', icon: '●', iconStyle: 'rounded-full' },
  { path: '/progress', label: 'Progress', icon: '■', iconStyle: '' },
  { path: '/favorites', label: 'Saved', icon: '+', iconStyle: 'border-none text-lg' }
];

export default function BottomNav() {
  return (
    <nav className="border-t-grid bg-main grid grid-cols-3 h-[60px] relative z-20">
      {navItems.map(({ path, label, icon, iconStyle }, index) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1.5 cursor-pointer text-[10px] uppercase tracking-widest ${
              index < navItems.length - 1 ? 'border-r-grid' : ''
            } ${isActive ? 'invert-colors' : ''}`
          }
        >
          <div
            className={`w-5 h-5 border border-current flex items-center justify-center text-sm font-bold ${iconStyle}`}
          >
            {icon}
          </div>
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
