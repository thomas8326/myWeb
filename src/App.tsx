// import Login from 'Containers/login/login';
import React from 'react';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Showroom from 'src/containers/showroom/showroom';
import { reduxStorage } from 'src/reducers';
import './App.css';

function App() {
  return (
    <>
      <Provider store={reduxStorage}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Showroom />}></Route>
            <Route path="/show-room" element={<Showroom />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
