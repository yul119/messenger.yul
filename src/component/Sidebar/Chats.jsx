import React from 'react';
import SearchInput from '../Input/SearchInput';
import Chat from './Chat';

const Chats = () => {
  return (
    <div className='h-2/3 md:h-[90vh] '>
      <div className='hidden md:block md:h-[12.5%] md:flex justify-center items-center'>
        <SearchInput placeholder='Search on Messenger.yul' name='search' />
      </div>
      <div className='w-screen h-[87.5%] md:w-full border-b-[1px] border-stone-300  flex md:flex-col justify-start items-center overflow-x-auto  md:px-2'>
        <Chat />
        <Chat isActive={true} />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
};

export default Chats;
