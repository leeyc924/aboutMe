import { ReactNode } from 'react';
import { Metadata } from 'next';
import '@styles/reset.css';
import '@styles/globals.css';
import Gnb from '@components/Gnb';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'leeyc',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body data-theme="light">
        <StyledComponentsRegistry>
          <Gnb />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
