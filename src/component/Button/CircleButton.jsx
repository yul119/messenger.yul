import React from 'react';

const CircleButton = ({ className, children }) => {
  return (
    <div
      className={
        'w-10 h-10 rounded-full bg-stone-200 border-stone-300 border-[0.125px] flex justify-center items-center cursor-pointer hover:opacity-70 ' +
        className
      }
    >
      {children}
    </div>
  );
};

export default CircleButton;
