import React from 'react';
import Input from '../shared/Input';
import Panel from '../shared/Panel';

const CreateHeroForm = () => (
  <Panel panelTitle="Create Hero">
    <div className="createHeroForm">
      <form>
        <Input className="addHero" placeholder="Hero name" />
      </form>
    </div>
  </Panel>
);

export default CreateHeroForm;
