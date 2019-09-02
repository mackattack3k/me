import { Router } from '@reach/router';
import React from 'react';
import HomePage from '../../home/components/HomePage';

const Pages = () => (
  <Router>
    <HomePage path="/" />
  </Router>
);

export default Pages;
