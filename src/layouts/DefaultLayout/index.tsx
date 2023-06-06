'use client';

import { ReactNode } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';

export interface DefaultLayoutProps {
  children: ReactNode;
}

type ThemeMode = 'dark' | 'light';
export const theme: Record<ThemeMode, DefaultTheme> = {
  dark: {
    mainBg: '#000000',
    mainFontColor: '#eaeaea',
  },
  light: {
    mainBg: '#fff',
    mainFontColor: '#000',
  },
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  // 브라우저 테마 정보 확인
  const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const browserTheme: ThemeMode = isBrowserDarkMode ? 'dark' : 'light';

  return (
    <>
      <ThemeProvider theme={theme[browserTheme]}>
        <Wrap>
          <Component>{children}</Component>
        </Wrap>
      </ThemeProvider>
    </>
  );
};

const Wrap = styled.div`
  color: ${({ theme }) => theme.mainFontColor};
  background-color: ${({ theme }) => theme.mainBg};
  height: 100%;
`;

const Component = styled.main`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export default DefaultLayout;
