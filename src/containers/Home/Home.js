import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import './Home.css';

export default class Home extends Component {

  render() {
    const {history} = this.props;
    return (
      <div className="Home-details-container">
        <SearchBar history={history} />
        Please type a Pokemon and press Enter
      </div>
    );
  }
}

