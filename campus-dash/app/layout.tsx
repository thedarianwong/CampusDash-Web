import Navigation from '@/components/Navigation';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Campus Dash',
  description: 'The Race to Class - A Board Game Experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#FEFFFE]">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-[#B70915] text-white py-4 text-center">
            <p>© 2024 Campus Dash. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}