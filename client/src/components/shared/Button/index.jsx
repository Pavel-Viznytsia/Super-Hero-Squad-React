import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ text, className, hero, onDelete }) => (
  <button className={className} onClick={() => onDelete(hero.id)}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  hero: PropTypes.shape.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Button;
