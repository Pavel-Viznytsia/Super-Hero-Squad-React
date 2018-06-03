import React from 'react';
import Panel from '../shared/Panel';
import HeroesSquadList from '../HeroesSquadList';

const SaveSquads = () => (
  <Panel panelTitle="Save Squads">
    <Panel>
      <HeroesSquadList />
    </Panel>
  </Panel>
);

export default SaveSquads;
