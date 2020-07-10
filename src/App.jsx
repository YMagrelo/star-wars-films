import React from 'react';
import './App.scss';
import './resets.scss';
import { Route } from 'react-router-dom';
import EpisodesList from './components/EpisodesList';
import EpisodeDetails from './components/EpisodeDetails';
import Character from './components/Character';

const App = () => (
  <div className="app-wrapper">
    <Route path="/" component={EpisodesList} exact />
    <Route path="/films/:filmId" component={EpisodeDetails} />
    <Route path="/people/:charId" component={Character} />
  </div>
);

export default App;
