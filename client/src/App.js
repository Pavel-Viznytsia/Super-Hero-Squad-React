import React, { Component } from 'react';
import Container from './components/shared/Container';
import CreateHero from './components/CreateHero';
import HeroesSearch from './components/HeroesSearch';
import SquadEditor from './components/SquadEditor';
import SavedSquads from './components/SavedSquads';
import HeroCard from './components/HeroCard';
import Button from './components/shared/Button';
import ButtonBlock from './components/shared/ButtonBlock';
import Input from './components/shared/Input';
import heroesLists from './components/mockup';
import './App.css';

const getAvailableHero = (heroesList, filter) =>
  heroesList.filter(hero => hero.name.includes(filter));

export default class App extends Component {
  state = {
    heroesList: heroesLists.heroes,
    filter: '',
  };

  onDeleteHero = id => {
    // console.log(id);
    this.setState(prevState => ({
      heroesList: prevState.heroesList.filter(hero => hero.id !== id),
    }));
  };

  handleFilterChange = str => {
    this.setState({ filter: str });
  };

  render() {
    const { heroesList, filter } = this.state;

    const viewHero = getAvailableHero(heroesList, filter);

    return (
      <div className="App">
        <Container>
          <CreateHero />
          <HeroesSearch heroesList={viewHero} onDeleteHero={this.onDeleteHero}>
            <Input
              className="addHero"
              placeholder="Search by name"
              onFilterChange={this.handleFilterChange}
              filter={filter}
            />
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
