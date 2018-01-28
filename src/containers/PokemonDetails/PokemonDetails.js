import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Paper} from 'material-ui';
import './PokemonDetails.css';

class PokemonDetails extends Component {

  render() {
    return (
      <Paper zDepth={1}
             className="Pokemon-details-container">

      </Paper>
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
