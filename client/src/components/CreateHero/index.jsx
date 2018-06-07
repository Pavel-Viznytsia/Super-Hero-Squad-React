import React from 'react';
import Input from '../shared/Input';
import Panel from '../shared/Panel';
import Button from '../shared/Button';
import Select from '../shared/Select';
import './style.css';

const statsDesc = ['Strangth', 'Intelligence', 'Speed'];

const CreateHero = () => (
  <Panel panelTitle="Create Hero">
    <form className="createHero">
      <Input className="addHero" placeholder="Hero name" />
      {statsDesc.map((statDesc, idx) => (
        <Select statName={statDesc} key={String(idx)} />
      ))}
      <Button text="Add Hero" className="addBtn" />
    </form>
  </Panel>
);

export default CreateHero;
