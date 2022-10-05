import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './page/Auth/Auth';
import Login from './page/Auth/Login';
import Register from './page/Auth/Register';
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
