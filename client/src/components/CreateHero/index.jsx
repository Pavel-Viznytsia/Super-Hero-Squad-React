import React from 'react';
import Input from '../shared/Input';
import Panel from '../shared/Panel';
import Button from '../shared/Button';
import Select from '../shared/Select';
import './style.css';

const CreateHero = () => (
  <Panel panelTitle="Create Hero">
    <form className="createHero">
      <Input className="addHero" placeholder="Hero name" />
      <Select statName="Strangth" />
      <Select statName="Intelligence" />
      <Select statName="Speed" />
      <Button text="Add Hero" className="addBtn" />
    </form>
  </Panel>
);

export default CreateHero;
