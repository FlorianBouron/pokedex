import React, { Component } from 'react';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import './PokemonInfo.css';

export default class PokemonInfo extends Component {

  handleBack = () => {
    const {pokemon, fetchPokemonById} = this.props;
    fetchPokemonById(pokemon.id-1)
  };

  handleNext = () => {
    const {pokemon, fetchPokemonById} = this.props;
    fetchPokemonById(pokemon.id+1)
  };

  render() {
    const {pokemon} = this.props;
    return (
      <div className='pokemon-info-component'>
        <div className='pokemon-arrow-back'>
          <SkipPrevious onClick={this.handleBack}/>
        </div>
        <div className='pokemon-content'>
          <div className='pokemon-name'>
            {pokemon.name.toUpperCase()}
          </div>
          <div className='pokemon-details'>
            <div className='pokemon-picture'>
              <img src={pokemon.sprites.front_default} alt={`sprit front default - ${pokemon.name}`}/>
            </div>
            <div>
              <div className='pokemon-id'>
                {`#ID: ${pokemon.id}`}
              </div>
              <div className='pokemon-height'>
                {`Height: ${pokemon.height*10} cm`}
              </div>
              <div className='pokemon-weight'>
                {`Weight: ${pokemon.weight/10} kg`}
              </div>
              <div className='pokemon-type'>
                {`Primary Type: ${pokemon.types[0].type.name}`}
              </div>
            </div>
          </div>
        </div>
        <div className='pokemon-arrow-next'>
          <SkipNext onClick={this.handleNext}/>
        </div>
      </div>
    );
  }
}