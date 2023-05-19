'use client';

export interface ScreenoutProps {
  children: string;
}

const Screenout = ({ children }: ScreenoutProps) => {
  return <span className="screen-out">{children}</span>;
};

export default Screenout;
