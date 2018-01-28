import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import App from "./containers/App";
import Home from "./containers/Home";
import PokemonDetails from "./containers/PokemonDetails";

const routes = (store) => {

  return (
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:pokemonName" component={PokemonDetails} />
        <Redirect from='*' to='/' />
      </Switch>
    </App>
  )
};

export default routes;
