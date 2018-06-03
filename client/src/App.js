/* eslint-disable */
import React, { Component } from 'react';
import Container from './components/shared/Container';
// import Panel from './components/shared/Panel';
import CreateHeroForm from './components/CreateHero';
import Heroes from './components/Heroes';
import SquadEditor from './components/SquadEditor';
import SaveSquads from './components/SaveSquads';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <CreateHeroForm />
          <Heroes />
          <SquadEditor />
          <SaveSquads />
        </Container>
      </div>
    );
  }
}

export default App;
