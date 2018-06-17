import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ text, className, onBtnClick }) => (
  <button className={className} onClick={onBtnClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;
