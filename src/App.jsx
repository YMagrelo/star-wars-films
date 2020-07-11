import React from 'react';
import './App.scss';
import './resets.scss';
import { Route } from 'react-router-dom';
import EpisodesList from './components/EpisodesList';
import EpisodeDetails from './components/EpisodeDetails';
import Character from './components/Character';
import Planet from './components/Planet';
import Starship from './components/Starship';

const App = () => (
  <div className="app-wrapper">
    <Route path="/" component={EpisodesList} exact />
    <Route path="/films/:filmId" component={EpisodeDetails} />
    <Route path="/people/:charId" component={Character} />
    <Route path="/planets/:planetId" component={Planet} />
    <Route path="/starships/:starshipId" component={Starship} />
  </div>
);

export default App;
