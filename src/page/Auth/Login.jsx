import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../component/Input';
import Button from '../../component/Button/Button';
import { Checkbox } from '../../component/Input/Checkbox';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';

const Login = () => {
  return (
    <div className='w-4/5 flex-col justify-center items-center'>
      <div className=''>
        <h1 className='text-center font-semibold md:text-3xl'>Messenger.yul</h1>
        <p className='text-xs md:text-sm text-slate-600 mt-2 text-center'>
          Wellcome back! Please enter your details.
        </p>
      </div>

      <div className='mt-6'>
        <Input label='Username' placeholder='Username' name='username' />
        <Input
          label='Password'
          placeholder='Password'
          name='password'
          type='password'
        />
      </div>

      <div className='flex mt-4 justify-between'>
        <div className='flex items-center'>
          <Checkbox label='Remember' />
        </div>
        <div className='flex items-center'>
          <Link
            to='#'
            className='text-[13px] md:text-sm text-primaryColor font-medium'
          >
            Forgot password
          </Link>
        </div>
      </div>

      <div className=''>
        <Button content='Sign in' className='bg-primaryColor text-white mt-4' />
        <Button
          content='Sign in with Google'
          className='bg-slate-200 text-slate-700 border-[1px] border-stone-300 mt-3 md:mt-3'
          children={<FcGoogle className='mr-2 text-[20px]' />}
        />
        <Button
          content='Sign in with Facebook'
          className='bg-[#415792] text-white border-[1px] mt-3 md:mt-3'
          children={
            <FaFacebookSquare className='mr-2 text-[20px] text-white' />
          }
        />
      </div>

      <div className='flex justify-center space-x-2 mt-4'>
        <p className='text-[13px] md:text-sm text-slate-600'>
          Don't have an account?
        </p>
        <Link
          to='/auth/register'
          className='text-[13px] md:text-sm text-primaryColor font-medium'
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
