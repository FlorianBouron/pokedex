import axios from 'axios';
import config from '../config';

const FETCH_POKEMONS = 'pokemon/FFETCH_POKEMONS';
const FETCH_POKEMON = 'pokemon/FFETCH_POKEMON';

const initialState = {

};

export const selectors = {
  getPokemonsName: (state) => state.pokemons.data ? state.pokemons.data.results.map(function(pokemon) { return pokemon["name"]; }) : [],
  getCurrentPokemon: (state) => state.pokemons.currentPokemon ? state.pokemons.currentPokemon : null,
};

export const fetchPokemons = () => {
  let request = axios.get(`${config.apiUrl}pokemon/?limit=949`);
  return dispatch => {
    request
      .then(
        ({data}) => {
          dispatch(
            {
              type: FETCH_POKEMONS,
              data
            }
          );
        }
      )
      .catch((error)=>{
        console.error(`Something wrong during fetching the pokemons`);
      });
  };
};

export const fetchPokemonByName = (name) => {
  let request = axios.get(`${config.apiUrl}pokemon/${name}`);
  return dispatch => {
    request
      .then(
        ({data}) => {
          dispatch(
            {
              type: FETCH_POKEMON,
              data
            }
          );
        }
      )
      .catch((error)=>{
        console.error(`Something wrong during fetching the pokemons`);
      });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_POKEMONS:
      const data = action.data;
      return Object.assign({}, state, {data});
    case FETCH_POKEMON:
      return Object.assign({}, state, {currentPokemon: action.data});
    default:
      return state;
  }
}
