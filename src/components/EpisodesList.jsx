import React, { useEffect, useState } from 'react';
import './EpisodesList.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getFilmsThunk, getSearchFilmThunk } from '../redux/reducer';
import { Preloader } from './common/Preloader';
import { filmsPropType } from '../propTypesConstant';
import { filmsUrlLength } from '../constants';

const EpisodesList = (props) => {
  const { films, getFilms, getSearchFilm, searchFilm } = props;
  const [query, setQuery] = useState('');

  useEffect(() => {
    getFilms();
  }, []);

  const handleInput = (event) => {
    const { value } = event.target;

    setQuery(value);
  };

  useEffect(() => {
    getSearchFilm(query);
  }, [query]);

  const sortedFilms = searchFilm.sort((a, b) => ((a.title > b.title) ? 1 : -1));

  return (
    <div className="episodes">
      <h1 className="episodes__heading">The list of the star wars episodes</h1>
      {!films.length && <Preloader />}
      <ul className="episodes__list">
        {sortedFilms.map((film) => {
          const filmId = film.url.slice(filmsUrlLength, -1);

          return (
            <li
              key={film.episode_id}
              className="episodes__item"
            >

              <NavLink to={`/films/${filmId}`}>{film.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Search by film title"
        className="episodes__input"
        value={query}
        onChange={handleInput}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  films: state.films,
  searchFilm: state.searchFilm,
});

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(getFilmsThunk()),
  getSearchFilm: query => dispatch(getSearchFilmThunk(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);

EpisodesList.propTypes = {
  getFilms: PropTypes.func.isRequired,
  films: filmsPropType.isRequired,
  getSearchFilm: PropTypes.func.isRequired,
  searchFilm: filmsPropType.isRequired,
};
