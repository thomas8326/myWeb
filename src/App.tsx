// import Login from 'Containers/login/login';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from 'src/containers/login/login';
import Showroom from 'src/containers/showroom/showroom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/show-room" element={<Showroom />}></Route>
      </Routes>
    </>
  );
}

export default App;
