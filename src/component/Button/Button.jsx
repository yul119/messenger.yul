import React from 'react';

const Button = ({ content, className, children }) => {
  return (
    <div
      className={
        'w-full py-2 md:py-[9px] text-sm md:text-base text-center rounded-md flex justify-center items-center hover:bg-opacity-70  ' +
        className
      }
    >
      {children && children}
      {content}
    </div>
  );
};

export default Button;
