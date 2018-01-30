import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {connect} from 'react-redux';
import {selectors, fetchPokemons} from '../../redux/pokemon';

import './SearchBar.css';

class SearchBar extends Component {

  componentWillMount () {
    const {fetchPokemons, listPokemonName} = this.props;
    if(!listPokemonName) {
      fetchPokemons();
    }
  }

  handleNewRequest = (request) => {
    const {history} = this.props;
    history.push(`/pokemon/${request}`);
  };

  render() {
    const {listPokemonName} = this.props;
    const searchBarText = "Look for a Pokemon";
    return (
      <div className='search-bar-component'>
        <AutoComplete
          hintText={searchBarText}
          floatingLabelText={searchBarText}
          fullWidth={true}
          filter={AutoComplete.fuzzyFilter}
          dataSource={listPokemonName ? listPokemonName : []}
          maxSearchResults={5}
          onNewRequest={this.handleNewRequest}/>
      </div>
    );
  }
}

export default connect(
  (state) => (
    {
      listPokemonName: selectors.getPokemonsName(state),
    }
  ),
  {fetchPokemons}
)(SearchBar);