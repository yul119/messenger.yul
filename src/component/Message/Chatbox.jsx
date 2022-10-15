import React from 'react';
import Message from './Message';

const Chatbox = ({ className }) => {
  return (
    <div className={'p-6 md:p-10 overflow-y-auto ' + className}>
      <Message isMyMessage />
      <Message isMyMessage />
      <Message />
      <Message isMyMessage />
      <Message />
      <Message />
      <Message isMyMessage />
      <Message isMyMessage />
      <Message />
      <Message isMyMessage />
      <Message />
      <Message />
      <Message isMyMessage />
      <Message isMyMessage />
      <Message />
      <Message />
    </div>
  );
};

export default Chatbox;
