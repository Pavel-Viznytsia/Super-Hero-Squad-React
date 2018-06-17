import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../shared/Panel';
import HeroCard from '../HeroCard';
import Input from '../shared/Input';
import ButtonBlock from '../shared/ButtonBlock';
import Button from '../shared/Button';
import './style.css';

const HeroesSearch = ({
  heroesList,
  filter,
  onDeleteHero,
  onFilterChange,
  takeHeroInfo,
}) => (
  <Panel panelTitle="Search Heroes">
    <Input
      className="addHero"
      placeholder="Search by name"
      onFilterChange={onFilterChange}
      filter={filter}
    />
    {heroesList.length > 0 ? (
      heroesList.map(hero => (
        <section key={String(hero.id)}>
          <HeroCard name={hero.name}>
            <ButtonBlock>
              <Button text="Add" className="addBtn" />
              <Button
                text="Del"
                className="delBtn"
                onBtnClick={() => onDeleteHero(hero.id)}
              />
              <Button
                text="Info"
                className="infBtn"
                onBtnClick={() => takeHeroInfo(hero)}
              />
            </ButtonBlock>
          </HeroCard>
        </section>
      ))
    ) : (
      <h3>no hero yet !</h3>
    )}
  </Panel>
);

HeroesSearch.propTypes = {
  heroesList: PropTypes.arrayOf.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteHero: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  takeHeroInfo: PropTypes.func.isRequired,
};

HeroesSearch.defaultProps = {};

export default HeroesSearch;
