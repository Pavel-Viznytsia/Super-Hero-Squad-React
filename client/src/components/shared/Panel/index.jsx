import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Panel = ({ panelTitle, children }) => (
  <div className="panel">
    <h4 className="panel__title">{panelTitle}</h4>
    {children}
  </div>
);

Panel.propTypes = {
  panelTitle: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired, // это еще не точно
};

export default Panel;
