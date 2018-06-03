import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Input extends Component {
  state = {
    value: '',
  };
  render() {
    Input.propTypes = {
      placeholder: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    };

    const { placeholder, className } = this.props;

    return (
      <div>
        <input className={className} type="text" placeholder={placeholder} />
      </div>
    );
  }
}

export default Input;
