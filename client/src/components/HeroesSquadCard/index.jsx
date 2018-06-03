import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button';
import './style.css';

const HeroesSquadCard = ({ children }) => (
  <div className="heroSquadCard">
    <p>Heroes Squad Card</p>
    {children}
    <Button className="delBtn" text="Delete Squad" />
  </div>
);

HeroesSquadCard.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeroesSquadCard;
