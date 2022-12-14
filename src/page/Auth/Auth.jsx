import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className='bg-[#e7e8f1] h-screen flex justify-center items-center '>
      <div className='w-screen md:w-3/4 h-screen md:h-3/4 md:rounded-lg flex md:shadow-2xl md:shadow-indigo-500/40'>
        <div className='hidden md:block md:w-1/2 md:h-full'>
          <img
            className='w-full h-full object-cover rounded-l-lg'
            src='https://i.picsum.photos/id/861/600/600.jpg?hmac=btm2b-slXMjxggnz0tyAen8AJzSGDOdVht4vV87I7UY'
            alt='img'
          />
        </div>
        <div className='w-full md:w-1/2 h-full  md:rounded-none md:rounded-r-lg bg-white flex justify-center items-center'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
