import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };

  static defaultProps = {
    placeholder: '',
    className: '',
    filter: '',
  };

  onFilterChange = e => {
    this.props.onFilterChange(e.target.value);
  };

  render() {
    const { placeholder, className, filter } = this.props;
    return (
      <div>
        <input
          className={className}
          type="text"
          value={filter}
          placeholder={placeholder}
          onChange={this.onFilterChange}
        />
      </div>
    );
  }
}
