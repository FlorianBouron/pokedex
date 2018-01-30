import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Paper, CircularProgress} from 'material-ui';
import SearchBar from '../../components/SearchBar';
import PokemonInfo from '../../components/PokemonInfo';
import {selectors, fetchPokemonByNameOrId} from '../../redux/pokemon';
import './PokemonDetails.css';

class PokemonDetails extends Component {

  componentWillMount () {
    const {fetchPokemonByNameOrId} = this.props;
    const {pokemonName} = this.props.match.params;
    fetchPokemonByNameOrId(pokemonName);
  }

  componentWillUpdate(nextProps) {
    const {pokemonName} = this.props.match.params;
    const nextPokemonName = nextProps.match.params.pokemonName;
    if(nextPokemonName!==pokemonName) {
      const {fetchPokemonByNameOrId} = this.props;
      fetchPokemonByNameOrId(nextPokemonName);
    }
  }

  render() {
    const {history, currentPokemon, fetchPokemonByNameOrId} = this.props;
    return (
      <div className="Pokemon-details-container">
        <SearchBar history={history} />
        <Paper zDepth={1}>
          {currentPokemon ?
          <div className='pokemon-details'>
            <PokemonInfo pokemon={currentPokemon}
                         fetchPokemonById={fetchPokemonByNameOrId}/>
          </div> :
          <div className='no-pokemon'>
            <CircularProgress />
          </div>}
        </Paper>
      </div>
    );
  }
}

export default connect(
  (state) => (
    {
      currentPokemon: selectors.getCurrentPokemon(state),
    }
  ),
  {fetchPokemonByNameOrId}
)(PokemonDetails);
