import React from 'react';
import Panel from '../shared/Panel';
import Button from '../shared/Button';
import './style.css';

const SquadEditor = () => (
  <Panel panelTitle="Squad Editor">
    <Button text="Save Squad" className="addBtn" />
    <Button text="Reset Squad" className="delBtn" />
    <ul className="squadsStats">
      <li>Strangth: {0}</li>
      <li>Intelligence: {0}</li>
      <li>Speed: {0}</li>
    </ul>
  </Panel>
);

export default SquadEditor;
