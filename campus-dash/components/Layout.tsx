import Navigation from './Navigation';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#FEFFFE]">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-[#B70915] text-white py-4 text-center">
        <p>© 2024 Campus Dash. All rights reserved.</p>
      </footer>
    </div>
  );
}