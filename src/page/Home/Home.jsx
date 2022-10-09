import React from 'react';
import Sidebar from '../../component/Sidebar';
import Message from '../../component/Message';

const Home = () => {
  return (
    <div className='grid'>
      <Sidebar />
      <Message />
    </div>
  );
};

export default Home;
