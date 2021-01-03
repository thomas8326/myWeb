// import Login from 'Containers/login/login';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'src/containers/login/login';
import Showroom from 'src/containers/showroom/showroom';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/show-room">
          <Showroom />
        </Route>
      </Switch>
    </>
  );
}

export default App;
