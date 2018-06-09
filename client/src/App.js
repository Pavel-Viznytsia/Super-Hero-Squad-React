/* eslint-disable*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './components/shared/Container';
import CreateHero from './components/CreateHero';
import HeroesSearch from './components/HeroesSearch';
import SquadEditor from './components/SquadEditor';
import SavedSquads from './components/SavedSquads';
import HeroCard from './components/HeroCard';
import Button from './components/shared/Button';
import ButtonBlock from './components/shared/ButtonBlock';
import heroesList from './components/mockup';
import './App.css';

export default class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    heroesList: heroesList.heroes,
    filter: '',
  };

  heroFilter = (allHeroes, filter) => {
    console.log('allHeroes: ', allHeroes);
    console.log('filter: ', filter);
    this.setState({
      heroesList: allHeroes.heroes.filter(item => item.name === filter),
    });
  };

  render() {
    const { heroesList } = this.state;
    return (
      <div className="App">
        <Container>
          <CreateHero />
          <HeroesSearch heroesList={heroesList} filter={this.heroFilter}>
            {heroesList.length > 0 && <HeroCard />}
          </HeroesSearch>
          <SquadEditor>
            {heroesList.length > 0 ? (
              <HeroCard name="SpiderMan">
                <ButtonBlock>
                  <Button text="Del" className="delBtn" />
                  <Button text="Info" className="infBtn" />
                </ButtonBlock>
              </HeroCard>
            ) : (
              <h1>no hero yet</h1>
            )}
          </SquadEditor>
          <SavedSquads />
        </Container>
      </div>
    );
  }
}
