import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';

const Messages = () => {
  const bottomRef = useRef<HTMLHeadingElement>(null!);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    const messages = useQuery('messages', fetchMessages);
    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    useEffect(() => {
      scrollToBottom();
    }, []);

    return (
      <div className='autoscroll-container'>
        <div className='scroll-list'>
          {messages &&
            messages.map((message, index) => (
              <p key={index}>{`${index + 1}. ${message}`}</p>
            ))}
        </div>
      </div>
    );
  };
};
export default Messages;
