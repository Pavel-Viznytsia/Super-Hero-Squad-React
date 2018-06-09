import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const HeroCard = ({ name, children }) => (
  <section className="heroCard">
    <p className="heroName">{name}</p>
    {children}
  </section>
);

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

HeroCard.defaultProps = {
  name: 'Vasya Pupkin',
};

export default HeroCard;
