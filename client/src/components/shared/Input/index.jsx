import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
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
  };

  render() {
    const { placeholder, className } = this.props;
    const { inputVal } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputVal}
          onChange={this.handleInputChange}
          className={className}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
