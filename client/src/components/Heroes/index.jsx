import React from 'react';
import PropTypes from 'prop-types';

const Heroes = ({ name }) => <div>{name}</div>;

Heroes.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Heroes;
