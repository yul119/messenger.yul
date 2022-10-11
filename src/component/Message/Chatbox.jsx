import React from 'react';
import Message from './Message';

const Chatbox = ({ className }) => {
  return (
    <div className={'overflow-y-auto p-6 md:p-10 ' + className}>
      <Message isMyMessage />
      <Message />
      <Message />
      <Message isMyMessage />
      <Message />
      <Message isMyMessage />
      <Message />
      <Message isMyMessage />
    </div>
  );
};

export default Chatbox;
