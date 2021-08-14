import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from './Routes';
import createStore from './store';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

ReactDOM.render(
  <Provider store={createStore(preloadedState)}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
