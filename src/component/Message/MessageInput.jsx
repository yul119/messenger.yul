import React from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { AiFillPicture } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const MessageInput = ({ className, ...props }) => {
  return (
    <div
      className={'w-full md:px-4 flex justify-around items-center ' + className}
    >
      <HiOutlineEmojiHappy className='iconMessageInput' />
      <AiFillPicture className='iconMessageInput' />
      <input
        className='placeholder:text-slate-400 block border border-slate-300  w-[70%] md:w-[90%]  outline-none px-4 md:px-8 py-1 md:py-2 rounded-2xl md:rounded-3xl'
        type='text'
        {...props}
      />
      <AiFillLike className='iconMessageInput' />
      {/* <FiSend className='iconMessageInput' /> */}
    </div>
  );
};

export default MessageInput;
