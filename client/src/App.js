/* eslint-disable */
import React, { Component } from 'react';
import Panel from './components/shared/Panel';
import Heroes from './components/Heroes';
import CreateHeroForm from './components/CreateHero';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="main">
          <h1 className="main__title">Super Squad</h1>
          <article className="main__container">
            <Panel panelTitle="Create Hero">
              <CreateHeroForm />
            </Panel>
            <Panel panelTitle="Heroes">
              <Heroes name="wtf" />
            </Panel>
            <Panel panelTitle="Squad Editor" />
            <Panel panelTitle="Saved Squads" />
          </article>
        </main>
      </div>
    );
  }
}

export default App;
