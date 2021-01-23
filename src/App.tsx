// import Login from 'Containers/login/login';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from 'src/containers/login/login';
import Showroom from 'src/containers/showroom/showroom';
import { wsConnect, wsDisconnect } from 'src/middlewares/message-socket.middleware';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());

    return function cleanup() {
      dispatch(wsDisconnect());
    };
  });

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
