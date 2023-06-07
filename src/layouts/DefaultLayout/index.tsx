'use client';

import { ReactNode, useEffect, useState } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';

export interface DefaultLayoutProps {
  children: ReactNode;
}

type ThemeMode = 'dark' | 'light';
export const theme: Record<ThemeMode, DefaultTheme> = {
  dark: {
    mainBg: '#1b1b1d',
    mainFontColor: '#eaeaea',
  },
  light: {
    mainBg: '#ffffff',
    mainFontColor: '#000000',
  },
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [themeType, setThemeType] = useState<ThemeMode>('light');
  useEffect(() => {
    // 브라우저 테마 정보 확인
    const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const browserTheme: ThemeMode = isBrowserDarkMode ? 'dark' : 'light';
    setThemeType(browserTheme);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme[themeType]}>
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
