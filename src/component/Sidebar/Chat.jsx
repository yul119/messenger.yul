import React from 'react';

const Chat = ({ isActive }) => {
  return (
    <div
      className={`flex justify-center items-center mx-1 md:mx-0 md:justify-between md:w-full md:p-2 hover:md:bg-slate-200 ${
        isActive ? 'md:bg-slate-200' : ''
      } rounded-2xl md:p-3 md:px-2 md:py-1`}
    >
      <div className='flex justify-between items-center'>
        <div className='w-[5rem] h-[5rem] md:w-14 md:h-14 rounded-full flex-shrink-0'>
          <img
            className='w-full h-full object-cover rounded-full'
            src='https://placekitten.com/g/400/400'
            alt='avt'
          />
        </div>
        <div className='hidden md:block ml-2 flex-col'>
          <h2 className='font-medium md:text-sm lg:text-base xl:text-lg'>
            Dang Thanh Long
          </h2>
          <p className='text-sm text-slate-600 text-ellipsis hidden xl:block'>
            asfd asfd asfd asd
          </p>
        </div>
      </div>
      <div className='hidden md:block'>
        <p className='text-slate-800'>20:01</p>
      </div>
    </div>
  );
};

export default Chat;
