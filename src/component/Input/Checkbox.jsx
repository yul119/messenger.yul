import React, { useId } from 'react';

export const Checkbox = ({ label = '' }) => {
  const id = useId();

  return (
    <div className='flex justify-center items-center'>
      <input type='checkbox' id={id} name='vehicle3' value='Boat' />
      <label
        className='ml-1 text-[13px] md:text-sm md:pt-1 text-slate-600'
        for={id}
      >
        {label}
      </label>
    </div>
  );
};
