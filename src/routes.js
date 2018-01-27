import React from 'react';
import {Route} from 'react-router';
import App from "./containers/App";

const routes = (store) => {

  return (
    <div>
      <Route path="/" component={App}>
      </Route>
    </div>
  )
};

export default routes;
