import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/App';
import websocketMiddleware from 'src/middlewares/message-socket.middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from './reducers';

const store = createStore(storage, composeWithDevTools(applyMiddleware(ReduxThunk, websocketMiddleware)));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
