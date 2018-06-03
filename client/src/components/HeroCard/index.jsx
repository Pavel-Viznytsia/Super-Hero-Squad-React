import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const HeroCard = ({ name, children }) => (
  <li className="heroCard">
    <p className="heroName">{name}</p>
    {children}
  </li>
);

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default HeroCard;
