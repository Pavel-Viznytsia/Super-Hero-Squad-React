import React from 'react';
import PropTypes from 'prop-types';

const ButtonBlock = ({ children }) => (
  <section className="btnBlock">{children}</section>
);

ButtonBlock.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonBlock;
