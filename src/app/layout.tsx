import { ReactNode } from 'react';
import { Metadata } from 'next';
import '@styles/reset.css';
import '@styles/globals.css';
import DefaultLayout from '../layouts/DefaultLayout';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'leeyc/aboutme',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <DefaultLayout>{children}</DefaultLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
