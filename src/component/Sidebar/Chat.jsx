import React from 'react';
import Avatar from '../Avatar';

const Chat = ({ isActive }) => {
  return (
    <div
      className={`flex justify-center items-center mx-1 md:mx-0 md:justify-between md:w-full md:p-2 hover:md:bg-slate-200 ${
        isActive ? 'md:bg-slate-200' : ''
      } rounded-2xl md:p-3 md:px-2 md:py-1 md:my-[2px] cursor-pointer`}
    >
      <div className='flex justify-between items-center'>
        <Avatar className='w-[5rem] h-[5rem] md:w-14 md:h-14 flex-shrink-0' />
        <div className='hidden lg:block ml-2 flex-col'>
          <h2 className='font-medium lg:text-base xl:text-lg'>
            Dang Thanh Long
          </h2>
          <p className='hidden xl:smText xl:block'>
            asfd asdf asdf asfd asdf asdf asfd asfd asd
          </p>
        </div>
      </div>
      <div className='hidden md:block'>
        <p className='text-slate-700 text-[0.8rem] pb-4'>20:01</p>
      </div>
    </div>
  );
};

export default Chat;
