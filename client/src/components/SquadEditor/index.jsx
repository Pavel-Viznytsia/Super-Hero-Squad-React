import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../shared/Panel';
import ButtonBlock from '../shared/ButtonBlock';
import Button from '../shared/Button';
import './style.css';

const statsDesc = ['Strangth', 'Intelligence', 'Speed'];

const SquadEditor = ({ children }) => (
  <Panel panelTitle="Squad Editor">
    <ButtonBlock className={'saBtnBlock'}>
      <Button text="Save Squad" className="addBtn" />
      <Button text="Reset Squad" className="delBtn" />
    </ButtonBlock>
    <ul className="squadsStats">
      {statsDesc.map((statDesc, idx) => (
        <li key={String(idx)}>{statDesc}: 0</li>
      ))}
    </ul>
    {children}
  </Panel>
);

SquadEditor.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SquadEditor;
