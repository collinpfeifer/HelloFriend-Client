import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import styles from '../styles/chat.module.css';
import Messages from '../components/Messages/Messages';
const PORT = 'http://localhost:4001';

const Chat = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(PORT);
    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className='chat'>
      <div id='sidebar' className={styles.chat__sidebar}></div>
      <div className={styles.chat__main}>
        <div id='messages' className={styles.chat__messages}>
        </div>

        <div className={styles.compose}>
          <form id='message-form'>
            <input
              name='message'
              placeholder='Message'
              required
              autoComplete='off'
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;