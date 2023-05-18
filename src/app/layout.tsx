import { ReactNode } from 'react';
import { Metadata } from 'next';
import '@styles/reset.css';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'leeyc',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
