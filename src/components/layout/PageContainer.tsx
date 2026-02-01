import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = ''
}: PageContainerProps) {
  return (
    <main className={`flex-1 overflow-y-auto relative z-10 flex flex-col ${className}`}>
      {children}
    </main>
  );
}
