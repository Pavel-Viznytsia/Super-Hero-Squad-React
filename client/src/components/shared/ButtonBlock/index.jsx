import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ButtonBlock = ({ children, className }) => (
  <section className={className}>{children}</section>
);

ButtonBlock.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

ButtonBlock.defaultProps = {
  children: PropTypes.string.isRequired,
  className: 'btnBlock',
};

export default ButtonBlock;
