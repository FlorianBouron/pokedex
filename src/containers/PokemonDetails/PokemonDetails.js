import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Paper} from 'material-ui';
import SearchBar from '../../components/SearchBar';
import './PokemonDetails.css';

class PokemonDetails extends Component {

  render() {
    const {history} = this.props;
    return (
      <div className="Pokemon-details-container">
        <SearchBar history={history} />
        <Paper zDepth={1}>

        </Paper>
      </div>
    );
  }
}

export default connect(
  (state) => (
    {
    }
  ),
  {}
)(PokemonDetails);
