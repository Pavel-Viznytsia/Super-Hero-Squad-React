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
    value: '',
  };
  render() {
    console.log(this.props);

    const { placeholder, className } = this.props;

    return (
      <div>
        <input
          onChange={() => {}}
          className={className}
          type="text"
          placeholder={placeholder}
        />
      </div>
    );
  }
}
