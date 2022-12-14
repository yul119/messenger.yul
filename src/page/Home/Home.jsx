import React from 'react';
import Sidebar from '../../component/Sidebar';
import Message from '../../component/Message';

const Home = () => {
  return (
    <div className=' md:grid md:grid-cols-desktop md:grid-rows-1 w-full h-screen '>
      <Sidebar />
      <Message />
    </div>
  );
};

export default Home;
