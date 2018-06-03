import React from 'react';
import Panel from '../shared/Panel';
import Button from '../shared/Button';

const SquadEditor = () => (
  <Panel panelTitle="Squad Editor">
    <Button text="Save Squad" className="addBtn" />
    <Button text="Reset Editor" className="delBtn" />
  </Panel>
);

export default SquadEditor;
