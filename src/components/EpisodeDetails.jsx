import React, { useEffect } from 'react';
import './EpisodeDetails.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getFilmDetailsThunk } from '../redux/reducer';
import { Preloader } from './common/Preloader';
import { filmDetailsPropTypes } from '../propTypesConstant';
import {
  charUrlLength,
  planetUrlLength,
  starshipsUrlLength,
} from '../constants';

const EpisodeDetails = (props) => {
  const { details, getFilmDetails } = props;
  const { filmId } = props.match.params;

  useEffect(() => {
    getFilmDetails(filmId);
  }, []);

  return (
    <div className="details">
      <NavLink to="/"><span>Home</span></NavLink>
      <h1 className="details__heading">Episode details</h1>
      {!details && <Preloader />}
      {details && (
        <div className="details__details-content content">
          <h3 className="content__title">{details.title}</h3>
          <p className="content__item">
            <strong>Opening crawl: </strong>
            {details.opening_crawl}
          </p>
          <p className="content__item">
            <strong>Director: </strong>
            {details.director}
          </p>
          <p className="content__item">
            <strong>Producer: </strong>
            {' '}
            {details.producer}
          </p>
          <p className="content__item">
            <strong>Release date: </strong>
            {' '}
            {details.release_date}
          </p>
          <ul className="content__item">
            <strong>Characters:</strong>
            {details.characters.map((char) => {
              const charId = char.slice(charUrlLength, -1);

              return (
                <NavLink to={`/people/${charId}`} key={char}>
                  <li>{char}</li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="content__item">
            <strong>Planets:</strong>
            {details.planets.map((planet) => {
              const planetId = planet.slice(planetUrlLength, -1);

              return (
                <NavLink to={`/planets/${planetId}`} key={planet}>
                  <li>{planet}</li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="content__item">
            <strong>Starships:</strong>
            {details.starships.map((ship) => {
              const shipId = ship.slice(starshipsUrlLength, -1);

              return (
                <NavLink to={`/starships/${shipId}`} key={ship}>
                  <li>{ship}</li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="content__item">
            <strong>Vehicles:</strong>
            {details.vehicles.map(vehicle => (
              <li key={vehicle}>{vehicle}</li>
            ))}
          </ul>
          <ul className="content__item">
            <strong>Species:</strong>
            {details.species.map(specie => (
              <li key={specie}>{specie}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
};

const mapStateToProps = state => ({
  details: state.filmDetails,
});

const mapDispatchToProps = dispatch => ({
  getFilmDetails: filmId => dispatch(getFilmDetailsThunk(filmId)),
});

const EpisodeDetailsWithRouter = withRouter(EpisodeDetails);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(EpisodeDetailsWithRouter);

EpisodeDetails.propTypes = {
  getFilmDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      filmId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  details: filmDetailsPropTypes,
};

EpisodeDetails.defaultProps = {
  details: PropTypes.object,
};
