import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Verify from './pages/Verify';
import Protected from './pages/Protected';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/verify" element={<Verify/>} />
        <Route path="/protected" element={<Protected/>} />
        <Route component={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
