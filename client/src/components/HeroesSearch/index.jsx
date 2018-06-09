import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../shared/Panel';
import Input from '../shared/Input';
import HeroCard from '../HeroCard';
import ButtonBlock from '../shared/ButtonBlock';
import Button from '../shared/Button';
import './style.css';

const HeroesSearch = ({ heroesList, filter }) => (
  <Panel panelTitle="Search Heroes">
    <Input
      className="addHero"
      placeholder="Search by name"
      onFilterChange={filter}
    />
    {heroesList.map(hero => (
      <section key={String(hero.id)}>
        <HeroCard name={hero.name}>
          <ButtonBlock>
            <Button text="Add" className="addBtn" />
            <Button text="Del" className="delBtn" />
            <Button text="Info" className="infBtn" />
          </ButtonBlock>
        </HeroCard>
      </section>
    ))}
  </Panel>
);

HeroesSearch.propTypes = {
  heroesList: PropTypes.shape().isRequired,
  filter: PropTypes.func.isRequired,
};

HeroesSearch.defaultProps = {};

export default HeroesSearch;
