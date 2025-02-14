import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Trivia Challenge',
  description: 'Trivia Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-fuchsia-900 to-indigo-900">
          <div className="w-full p-8 rounded-xl max-w-lg bg-white flex flex-col gap-4">
            <h1 className="text-3xl w-full text-center font-bold mb-3 text-indigo-900">
              Trivia Challenge
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
