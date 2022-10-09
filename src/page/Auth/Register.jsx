import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../component/Input';
import Button from '../../component/Input/Button';

const Register = () => {
  return (
    <div className='w-4/5  flex-col justify-center items-center'>
      <div className=''>
        <h1 className='text-center font-semibold md:text-3xl'>Message.yul</h1>
        <p className='text-xs md:text-sm text-slate-600 mt-2 text-center'>
          Let's create your account.
        </p>
      </div>
      <div className='mt-6'>
        <Input label='Username' placeholder='Username' name='username' />
        <Input label='Email' placeholder='Email' name='email' type='email' />
        <Input
          label='Password'
          placeholder='Password'
          name='password'
          type='password'
        />
        <Input
          label='Confirm Password'
          placeholder='Confirm Password'
          name='confirmPassword'
          type='password'
        />
      </div>

      {/* <div className='flex mt-4 justify-between md:mx-6'>
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
      </div> */}

      <div className='mt-8'>
        <Button content='Sign up' className='bg-primaryColor text-white mt-4' />
      </div>

      <div className='flex justify-center space-x-2 mt-4'>
        <p className='text-[13px] md:text-sm text-slate-600'>
          Already have an account?
        </p>
        <Link
          to='/auth/login'
          className='text-[13px] md:text-sm text-primaryColor font-medium'
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Register;
