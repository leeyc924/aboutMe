'use client';

import { useCallback, useState } from 'react';
import { BiLeftArrow as LeftIcon, BiRightArrow as RightIcon } from 'react-icons/bi';
import History from '@components/History';
import Screenout from '@components/Screenout';

const historyList: any[] = [{ id: '1' }, { id: '2' }, { id: '3' }];

const Swiper = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(historyList.length / 2));

  const handleClick = useCallback((flag: 'prev' | 'next') => {
    const first = 0;
    const last = historyList.length - 1 < 0 ? 0 : historyList.length - 1;

    if (flag === 'prev') {
      setActiveIndex(prev => (prev - 1 < 0 ? last : prev - 1));
      return;
    }

    setActiveIndex(prev => (prev + 1 > last ? first : prev + 1));
  }, []);

  return (
    <div className="swiper">
      <button onClick={() => handleClick('prev')}>
        <LeftIcon />
        <Screenout>left icon</Screenout>
      </button>
      <div className="swiper__container">
        {historyList.map((history, index) => (
          <History key={index} id={history.id} isActive={activeIndex === index}>
            {history}
          </History>
        ))}
      </div>
      <button onClick={() => handleClick('next')}>
        <RightIcon />
        <Screenout>right icon</Screenout>
      </button>
    </div>
  );
};

export default Swiper;
