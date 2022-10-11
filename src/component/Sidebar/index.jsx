import React from 'react';
import Header from '../Header';
import Chats from './Chats';
import CircleButton from '../Button/CircleButton';
import { GrAdd } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className='h-[25%] md:h-screen border-r-stone-300 md:border-r-[1px]'>
      <Header imgClassName='w-10 h-10' className='px-1 md:px-4'>
        <CircleButton
          children={<BsThreeDots className='text-[18] text-stone-600' />}
        />
        <CircleButton
          className='ml-2'
          children={<GrAdd className='text-[18] text-stone-600' />}
        />
      </Header>
      <Chats />
    </div>
  );
};

export default Sidebar;
