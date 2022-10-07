import React, { useId } from 'react';

function Input({ label, className = '', type = 'text', ...props }) {
  const id = useId();
  return (
    <div className={'mt-2 ' + className}>
      <label className='block' htmlFor={id}>
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm md:text-base font-medium text-slate-700">
          {label}
        </span>
        <input
          id={id}
          type={type}
          className='mt-1 px-3 py-1 md:py-2 bg-white border shadow-sm border-slate-300 placeholder:text-[13px] md:placeholder:text-[14px] placeholder-slate-400 focus:outline-none focus:border-primaryColor focus:ring-primaryColor block w-full rounded-md sm:text-sm focus:ring-1'
          {...props}
        />
      </label>
    </div>
  );
}

export default Input;
