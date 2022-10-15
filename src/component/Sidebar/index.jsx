import React from 'react';
import Header from '../Header';
import Chats from './Chats';
import CircleButton from '../Button/CircleButton';
import { GrAdd } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className='h-[25%] md:h-screen border-r-stone-300 md:border-r-[1px]'>
      <Header imgClassName='w-10 h-10' className='px-1 md:px-4'>
        <CircleButton
          children={<BiLogOut className='text-[18] text-stone-600' />}
        />
        <CircleButton
          children={<GrAdd className='text-[18] text-stone-600' />}
          className='ml-2 relative'
        />
        <CircleButton
          children={<BsThreeDots className='text-[18] text-stone-600' />}
          className='ml-2 relative'
        />
      </Header>
      <Chats />
    </div>
  );
};

export default Sidebar;
