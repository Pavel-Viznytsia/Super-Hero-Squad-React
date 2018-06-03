import React from 'react';
import HeroCard from '../HeroCard';
import Input from '../shared/Input';
import Panel from '../shared/Panel/index';
import ButtonBlock from '../shared/ButtonBlock';
import Button from '../shared/Button';

const heroesList = {
  heroes: [
    {
      id: 0,
      name: 'Superman',
      strength: 10,
      intelligence: 7,
      speed: 9,
    },
    {
      id: 1,
      name: 'Batman',
      strength: 7,
      intelligence: 10,
      speed: 6,
    },
    {
      id: 2,
      name: 'Wonderwoman',
      strength: 5,
      intelligence: 9,
      speed: 7,
    },
    {
      id: 3,
      name: 'Flash',
      strength: 5,
      intelligence: 6,
      speed: 10,
    },
    {
      id: 4,
      name: 'Green Lantern',
      strength: 7,
      intelligence: 8,
      speed: 7,
    },
    {
      id: 5,
      name: 'Aquaman',
      strength: 8,
      intelligence: 7,
      speed: 8,
    },
    {
      id: 6,
      name: 'Cyborg',
      strength: 9,
      intelligence: 8,
      speed: 6,
    },
    {
      id: 7,
      name: 'Green Arrow',
      strength: 5,
      intelligence: 9,
      speed: 7,
    },
    {
      id: 8,
      name: 'Hawkman',
      strength: 5,
      intelligence: 8,
      speed: 8,
    },
    {
      id: 9,
      name: 'Supergirl',
      strength: 10,
      intelligence: 9,
      speed: 7,
    },
  ],
  squads: [
    {
      heroes: [
        {
          id: 1,
          name: 'Batman',
          strength: 7,
          intelligence: 10,
          speed: 6,
        },
      ],
      stats: {
        str: 7,
        int: 10,
        spd: 6,
      },
      id: 1,
    },
  ],
};

const Heroes = () => (
  <Panel panelTitle="Heroes">
    <Input className="addHero" placeholder="Search by name" />
    <ul>
      {heroesList.heroes.map(item => (
        <HeroCard name={item.name} key={String(item.id)}>
          <ButtonBlock>
            <Button text="Add" className="addBtn" />
            <Button text="Del" className="delBtn" />
            <Button text="Info" className="infBtn" />
          </ButtonBlock>
        </HeroCard>
      ))}
    </ul>
  </Panel>
);

export default Heroes;
