import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ text, className }) => (
  <button className={className} onClick={() => {}}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
