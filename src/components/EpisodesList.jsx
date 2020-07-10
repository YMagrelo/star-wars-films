import React, { useEffect } from 'react';
import './EpisodesList.scss';
import { connect } from 'react-redux';
import { getFilmsThunk } from '../redux/reducer';
import { NavLink } from 'react-router-dom';

const EpisodesList = (props) => {
  const { films, getFilms } = props;

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="episodes">
      <h1 className="episodes__heading">The list of the star wars episodes</h1>
      <ul className="episodes__list">
        {films.map((film) => {
          const filmId = film.url.slice(-2, -1);

          return (
            <li
              key={film.episode_id}
              className="episodes__item"
            >

              <NavLink to={`/films/${filmId}`}>{film.title}</NavLink>
              {filmId}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  films: state.films,
});

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(getFilmsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);
