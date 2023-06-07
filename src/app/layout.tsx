import { ReactNode } from 'react';
import { Metadata } from 'next';
import '@styles/reset.css';
import '@styles/globals.css';
import Gnb from '@components/Gnb';
import DefaultLayout from '../layouts/DefaultLayout';
import StyledComponentsRegistry from './registry';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <DefaultLayout>
            <Gnb />
            {children}
          </DefaultLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
