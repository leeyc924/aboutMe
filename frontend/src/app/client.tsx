'use client';

import { useEffect, useState } from 'react';
import SocketIO from 'socket.io-client';

const Client = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const socket = SocketIO('http://localhost:8000');
    return () => {};
  }, []);
  return <div>test</div>;
};

export default Client;
