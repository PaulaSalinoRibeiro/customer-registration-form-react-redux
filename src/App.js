import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientesRegister from './pages/ClientesRegister';
import Register from './pages/Register';

class App
 extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register-clients' element={<ClientesRegister/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </>
    );
  }
}

export default App
;

