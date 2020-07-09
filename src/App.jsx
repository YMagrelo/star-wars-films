import React, { useEffect } from 'react';
import './App.scss';
import './resets.scss';
import { connect } from 'react-redux';
import { getFilmsThunk } from './redux/reducer';
import { EpisodesList } from './components/EpisodesList';

const App = (props) => {
  const { films, getFilms } = props;

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="app-wrapper">
      <h1 className="app-title">The list of the star wars episodes</h1>
      <EpisodesList films={films} />
    </div>
  );
};

const mapStateToProps = state => ({
  films: state.reducer.films,
});

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(getFilmsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
