import React, { ReactNode } from "react";

interface LayoutProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  alignCenter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  header,
  footer,
  children,
  alignCenter,
}) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="flex items-center justify-between p-5 border-b rounded-t h-[75px]">
        {header}
      </header>
      <main className={`p-6 h-[calc(100vh-148px)] overflow-auto`}>
        <div className={` max-w-2xl ${alignCenter ? "mx-auto" : ""}`}>
          {children}
        </div>
      </main>
      <footer className="flex items-center justify-end p-5 border-t border-gray-200 rounded-b h-[73px] absolute bottom-0 left-0 right-0">
        {footer}
      </footer>
    </div>
  );
};

export default Layout;
