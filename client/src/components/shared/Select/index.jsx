import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Select extends Component {
  static propTypes = {
    statName: PropTypes.string.isRequired,
  };

  static defaulProps = {};

  state = {
    statVal: '0',
  };

  handleInputChange = e => {
    const value = e.target.value;
    this.setState({ statVal: value });
  };

  render() {
    const statVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { statVal } = this.state;
    const { statName } = this.props;
    return (
      <div className="optBlock">
        {statName}
        <select
          className="selectStat"
          name="str"
          id="str"
          onChange={this.handleInputChange}>
          <option value="0">{statVal}</option>
          {statVals.map((statItm, idx) => (
            <option value={statItm} key={String(idx)} className="optVal">
              {statItm}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
