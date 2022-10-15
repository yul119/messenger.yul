import React from 'react';
import Header from '../Header';
import CircleButton from '../Button/CircleButton';
import { FiSettings } from 'react-icons/fi';
import { MdPersonAddAlt } from 'react-icons/md';
import Chatbox from './Chatbox';
import MessageInput from './MessageInput';

const Message = () => {
  const isGroup = true;

  return (
    <div className='h-[75%] md:h-screen relative before:bgMessage'>
      <Header imgClassName='w-14 h-14' className='hidden md:flex md:px-4'>
        {isGroup && (
          <CircleButton
            children={<MdPersonAddAlt className='text-[18] text-stone-600' />}
          />
        )}
        <CircleButton
          className='ml-2'
          children={<FiSettings className='text-[18] text-stone-600' />}
        />
      </Header>

      <Chatbox className='h-[90%] md:h-[80%]' />
      <MessageInput
        name='messInput'
        placeholder='Type a message'
        className='h-[10%] md:h-[10%]'
      />
    </div>
  );
};

export default Message;
