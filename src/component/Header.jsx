import React from 'react';
import Avatar from './Avatar';

const Header = ({ children, imgClassName, className }) => {
  return (
    <div
      className={
        'h-1/3 w-full md:h-[10vh] bg-[#ededed] flex justify-between border-b-[1px] border-stone-300 ' +
        className
      }
    >
      <div className='flex justify-center items-center'>
        <Avatar className={'flex-shrink-0 ' + imgClassName} />
        <h2 className='text-sm md:text-base lg:text-lg text-slate-600 ml-2'>
          Thanh Long
        </h2>
      </div>

      <div className='flex justify-center items-center'>{children}</div>
    </div>
  );
};

export default Header;
