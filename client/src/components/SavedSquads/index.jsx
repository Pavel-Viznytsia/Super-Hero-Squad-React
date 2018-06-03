import React from 'react';
import Panel from '../shared/Panel';
import HeroesSquadCard from '../HeroesSquadCard';
import './style.css';

const SavedSquads = () => (
  <Panel panelTitle="Saved Squads">
    <HeroesSquadCard>
      <table className="savedSquadCard">
        <tr>
          <th>Heroes:</th>
          <th>Stats:</th>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>Doe</td>
        </tr>
      </table>
    </HeroesSquadCard>
  </Panel>
);

export default SavedSquads;
