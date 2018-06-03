/* eslint-disable */
import React, { Component } from 'react';
import Container from './components/shared/Container';
import CreateHero from './components/CreateHero';
import Heroes from './components/Heroes';
import SquadEditor from './components/SquadEditor';
import SavedSquads from './components/SavedSquads';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <CreateHero />
          <Heroes />
          <SquadEditor />
          <SavedSquads />
        </Container>
      </div>
    );
  }
}

export default App;
