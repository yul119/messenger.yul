import React, { useId } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = ({ className, ...props }) => {
  const id = useId();
  return (
    <div className={'w-full mx-2 ' + className}>
      <label class='relative block' htmlFor={id}>
        <AiOutlineSearch className='absolute top-2 left-2 text-xl text-slate-400' />
        <input
          id={id}
          class=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primaryColor focus:ring-primaryColor focus:ring-1 sm:text-sm'
          type='text'
          {...props}
        />
      </label>
    </div>
  );
};

export default SearchInput;
