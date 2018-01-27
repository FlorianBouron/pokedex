import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store'
import routes from "./routes";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const state = window.__initialState__ || undefined;
const store = configureStore(state);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      {routes(store)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
