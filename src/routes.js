import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import App from "./containers/App";
import Home from "./containers/Home";
import PokemonDetails from "./containers/PokemonDetails";

const routes = () => {

  return (
    <App>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/pokemon/:pokemonName" render={props => <PokemonDetails {...props} />} />
        <Redirect from='*' to='/' />
      </Switch>
    </App>
  )
};

export default routes;
