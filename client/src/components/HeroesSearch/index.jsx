import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../shared/Panel';
import HeroCard from '../HeroCard';
import ButtonBlock from '../shared/ButtonBlock';
import Button from '../shared/Button';
import './style.css';

const HeroesSearch = ({ heroesList, children, onDeleteHero }) => (
  <Panel panelTitle="Search Heroes">
    {children}
    {heroesList.map(hero => (
      <section key={String(hero.id)}>
        <HeroCard name={hero.name}>
          <ButtonBlock>
            <Button text="Add" className="addBtn" />
            <Button
              text="Del"
              className="delBtn"
              hero={hero}
              onDelete={onDeleteHero}
            />
            <Button text="Info" className="infBtn" />
          </ButtonBlock>
        </HeroCard>
      </section>
    ))}
  </Panel>
);

HeroesSearch.propTypes = {
  heroesList: PropTypes.arrayOf.isRequired,
  children: PropTypes.string.isRequired,
  onDeleteHero: PropTypes.func.isRequired,
};

HeroesSearch.defaultProps = {};

export default HeroesSearch;
