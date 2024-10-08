import React, { ReactNode } from 'react';

interface LayoutProps {
  header: ReactNode,
  footer: ReactNode,
  children: ReactNode,
  alignCenter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ header, footer, children, alignCenter }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-2 border-b rounded-t">
        {header}
      </header>
      <main className={`p-6 h-[calc(100vh-7.7rem)] overflow-auto`}>
        <div className={` max-w-xl ${alignCenter ? 'mx-auto' : ''}`}>
          {children}
        </div>
      </main>
      <footer className="flex items-center justify-end p-4 border-t border-gray-200 rounded-b">
        {footer}
      </footer>
    </div>
  );
};

export default Layout;
