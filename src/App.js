import React from 'react';
import HeaderNavigation from './features/navigation/components/HeaderNavigation';
import Pages from './features/navigation/components/Pages';
import './App.scss';

const App = () => (
  <div className="app">
    <HeaderNavigation />
    <Pages />
  </div>
);

export default App;
