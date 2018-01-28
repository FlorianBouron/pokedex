import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {connect} from 'react-redux';
import {selectors, fetchPokemons} from '../../redux/pokemon';

import './SearchBar.css';

class SearchBar extends Component {

  componentWillMount () {
    const {fetchPokemons} = this.props;
    fetchPokemons();
  }

  render() {
    const {pokemonsName} = this.props;
    const searchBarText = "Look for a Pokemon";
    return (
      <div className='search-bar-component'>
        <AutoComplete
          hintText={searchBarText}
          floatingLabelText={searchBarText}
          fullWidth={true}
          filter={AutoComplete.fuzzyFilter}
          dataSource={pokemonsName}
          maxSearchResults={5}/>
      </div>
    );
  }
}

export default connect(
  (state) => (
    {
      pokemonsName: selectors.getPokemonsName(state),
    }
  ),
  {fetchPokemons}
)(SearchBar);