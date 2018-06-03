import React from 'react';
import Panel from '../shared/Panel';
import HeroCard from '../HeroCard';
import ButtonBlock from '../shared/ButtonBlock';
import Button from '../shared/Button';
import './style.css';

const statsDesc = ['Strangth', 'Intelligence', 'Speed'];

const SquadEditor = () => (
  <Panel panelTitle="Squad Editor">
    <Button text="Save Squad" className="addBtn" />
    <Button text="Reset Squad" className="delBtn" />
    <ul className="squadsStats">
      {statsDesc.map((statDesc, idx) => (
        <li key={String(idx)}>{statDesc}: 0</li>
      ))}
    </ul>
    <HeroCard name="SpiderMan">
      <ButtonBlock>
        <Button text="Del" className="delBtn" />
        <Button text="Info" className="infBtn" />
      </ButtonBlock>
    </HeroCard>
  </Panel>
);

export default SquadEditor;
