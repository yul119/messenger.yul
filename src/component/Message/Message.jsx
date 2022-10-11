import React from 'react';
import Avatar from '../Avatar';

const Message = ({ isMyMessage = false }) => {
  return (
    <div
      className={`flex relative w-full my-[10px] ${
        isMyMessage ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isMyMessage && (
        <Avatar className='w-10 h-10 -mt-5 ' imgClassName='-ml-2' />
      )}
      <div
        className={`relative right-0 max-w-[65%] p-3 pb-6 ${
          isMyMessage
            ? 'bg-[#8bb56b] before:bfMyMess'
            : 'bg-[#ddd] before:bfOtherMess ml-2'
        }  rounded-[10px]`}
      >
        <p className='text-sm md:text-base text-left'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          voluptas fugit eligendi, illum consequuntur natus esse perspiciatis
        </p>
        <span className=' opacity-50 text-[0.8rem] md:text-sm absolute right-2 bottom-2'>
          00:21
        </span>
      </div>
    </div>
  );
};

export default Message;
