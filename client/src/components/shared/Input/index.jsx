import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import heroesList from '../../mockup';
import './style.css';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: 'Enter somthing',
    className: 'no class name',
  };

  state = {
    inputVal: '',
  };

  handleInputChange = e => {
    const value = e.target.value;

    this.setState({ inputVal: value });

    this.props.onFilterChange(this.state.inputVal);
  };

  render() {
    const { placeholder, className } = this.props;
    const { inputVal } = this.state;
    console.log('inputVal in INPUT:', inputVal);
    return (
      <div>
        <input
          className={className}
          type="text"
          value={inputVal}
          placeholder={placeholder}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
