import React from 'react';
import './App.scss';
import './resets.scss';
import { Route } from 'react-router-dom';
import EpisodesList from './components/EpisodesList';
import EpisodeDetails from './components/EpisodeDetails';

const App = props => (
  <div className="app-wrapper">
    <Route path="/" component={EpisodesList} exact />
    <Route path="/films/:filmId" component={EpisodeDetails} />
  </div>
);

export default App;

