import React from 'react';
import CircleButton from '../Button/CircleButton';
import { GrAdd } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='h-1/3 w-full md:h-[10vh] flex justify-between px-4 border-b-[1px] border-stone-300'>
      <div className='flex justify-center items-center'>
        <div className='w-10 h-10 rounded-full'>
          <img
            className='w-full h-full object-cover rounded-full'
            src='https://placekitten.com/g/300/300'
            alt='avt'
          />
        </div>
        <h2 className='text-sm md:text-lg text-slate-600 ml-2'>Thanh Long</h2>
      </div>

      <div className='flex justify-center items-center'>
        <CircleButton
          children={<BsThreeDots className='text-[18] text-stone-600' />}
        />
        <CircleButton
          className='ml-2'
          children={<GrAdd className='text-[18] text-stone-600' />}
        />
      </div>
    </div>
  );
};

export default Header;
