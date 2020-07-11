import React, { useEffect } from 'react';
import './EpisodesList.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getFilmsThunk } from '../redux/reducer';
import { Preloader } from './common/Preloader';
import { filmsPropType } from '../propTypesConstant';
import { filmsUrlLength } from '../constants';

const EpisodesList = (props) => {
  const { films, getFilms } = props;

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="episodes">
      <h1 className="episodes__heading">The list of the star wars episodes</h1>
      {!films.length && <Preloader />}
      <ul className="episodes__list">
        {films.map((film) => {
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

EpisodesList.propTypes = {
  getFilms: PropTypes.func.isRequired,
  films: filmsPropType.isRequired,
};
