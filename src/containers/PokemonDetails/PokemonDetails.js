import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Paper, CircularProgress} from 'material-ui';
import SearchBar from '../../components/SearchBar';
import PokemonInfo from '../../components/PokemonInfo';
import {selectors, fetchPokemonByName} from '../../redux/pokemon';
import './PokemonDetails.css';

class PokemonDetails extends Component {

  componentWillMount () {
    const {fetchPokemonByName} = this.props;
    const {pokemonName} = this.props.match.params;
    fetchPokemonByName(pokemonName);
  }

  render() {
    const {history, currentPokemon} = this.props;
    return (
      <div className="Pokemon-details-container">
        <SearchBar history={history} />
        <Paper zDepth={1}>
          {currentPokemon ?
          <div className='pokemon-details'>
            <PokemonInfo pokemon={currentPokemon}/>
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
  {fetchPokemonByName}
)(PokemonDetails);
