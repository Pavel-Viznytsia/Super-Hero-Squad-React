/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Container = ({ children }) => (
  <main className="main">
    <h1 className="main__title">Super Squad</h1>
    <article className="main__container">{children}</article>
  </main>
);

export default Container;
