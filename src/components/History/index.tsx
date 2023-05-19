'use client';

import { ReactNode, memo } from 'react';
import './index.scss';

export interface HistoryProps {
  id: string;
  children: ReactNode;
  handleDetail(id: string): void;
  isActive: boolean;
}

const History = ({ id, handleDetail, isActive }: HistoryProps) => {
  return (
    <div className={`history${isActive ? ' history--active' : ''}`} onClick={() => handleDetail(id)}>
      카드
    </div>
  );
};

export default memo(History);
