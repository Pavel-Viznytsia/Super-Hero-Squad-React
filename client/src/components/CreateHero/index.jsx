import React from 'react';
import Input from '../shared/Input';
import Panel from '../shared/Panel';
import Button from '../shared/Button';
import Select from '../shared/Select';
import './style.css';

const statsDesc = ['Strangth', 'Intelligence', 'Speed'];

const CreateHero = () => (
  <Panel panelTitle="Create Hero">
    <div className="createHero">
      <form>
        <Input className="addHero" placeholder="Hero name" />
        {statsDesc.map((statDesc, idx) => (
          <Select statName={statDesc} key={String(idx)} />
        ))}
      </form>
      <Button text="Add Hero" className="addBtn" />
    </div>
  </Panel>
);

export default CreateHero;
