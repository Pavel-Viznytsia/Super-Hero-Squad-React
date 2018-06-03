import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const statVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Select = ({ statName }) => (
  <div>
    <select className="selectStat" name="str" id="str">
      <option className="statVal" value={statName} defaultValue>
        {statName}
      </option>
      {statVals.map((statVal, idx) => (
        <option value={statVal} key={String(idx)}>
          {statVal}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  statName: PropTypes.string.isRequired,
};

export default Select;
