import React from 'react';
import PropTypes from 'prop-types';
import ButtonBlock from '../shared/ButtonBlock';
import Button from '../shared/Button';
import './style.css';

const HeroCard = ({ name }) => (
  <li className="heroCard">
    <p className="heroName">{name}</p>
    <ButtonBlock>
      <Button text="Add" className="addBtn" />
      <Button text="Del" className="delBtn" />
      <Button text="Info" className="infBtn" />
    </ButtonBlock>
  </li>
);

HeroCard.propTypes = {
  name: PropTypes.string,
};

HeroCard.defaultProps = {
  name: 'SuperWomen',
};

export default HeroCard;
