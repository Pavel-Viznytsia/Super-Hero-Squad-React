import React, { Component } from 'react';
import PropTypes from 'prop-types';
import heroesList from '../../mockup';
import './style.css';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    filter: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: 'Enter somthing',
    className: 'no class name',
  };

  state = {
    inputVal: '',
  };

  onFilter = () => {
    this.props.filter(heroesList, this.state.inputVal);
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
