import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import pokemon from './pokemon';

export default combineReducers({
  routing: routerReducer,
  pokemons : pokemon,
});
