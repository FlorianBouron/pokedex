import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store'
import routes from "./routes";
import registerServiceWorker from './registerServiceWorker';
import { theme } from './theme';
import './index.css';

const state = window.__initialState__ || undefined;
const store = configureStore(state);

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        {routes()}
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
