import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import App from './App';
import storage from './reducers';

const store = createStore(storage, applyMiddleware(ReduxThunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
