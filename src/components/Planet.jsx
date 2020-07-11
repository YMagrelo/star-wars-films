import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getPlanetThunk } from '../redux/reducer';
import { Preloader } from './common/Preloader';
import { planetPropType } from '../propTypesConstant';
import { charUrlLength, filmsUrlLength } from '../constants';

const Planet = (props) => {
  const { planet, getPlanet } = props;
  const { planetId } = props.match.params;

  useEffect(() => {
    getPlanet(planetId);
  }, []);

  return (
    <div className="details">
      <NavLink to="/"><span>Home</span></NavLink>
      <h1 className="details__heading">Planet details</h1>
      {!planet && <Preloader />}
      {planet && (
        <div className="details__content content">
          <h3 className="content__title">{planet.name}</h3>
          <p className="content__item">
            <strong>Rotation period: </strong>
            {planet.rotation_period}
          </p>
          <p className="content__item">
            <strong>Orbital period: </strong>
            {planet.orbital_period}
          </p>
          <p className="content__item">
            <strong>Diameter: </strong>
            {' '}
            {planet.diameter}
          </p>
          <p className="content__item">
            <strong>Climate: </strong>
            {' '}
            {planet.climate}
          </p>
          <p className="content__item">
            <strong>Gravity: </strong>
            {' '}
            {planet.gravity}
          </p>
          <p className="content__item">
            <strong>Terrain: </strong>
            {' '}
            {planet.terrain}
          </p>
          <p className="content__item">
            <strong>Surface water: </strong>
            {' '}
            {planet.surface_water}
          </p>
          <p className="content__item">
            <strong>Population: </strong>
            {' '}
            {planet.population}
          </p>
          <ul className="content__item">
            <strong>Residents:</strong>
            {planet.residents.map((resident) => {
              const charId = resident.slice(charUrlLength, -1);

              return (
                <NavLink to={`/people/${charId}`} key={resident}>
                  <li>{resident}</li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="content__item">
            <strong>Films:</strong>
            {planet.films.map((film) => {
              const filmId = film.slice(filmsUrlLength, -1);

              return (
                <NavLink to={`/films/${filmId}`} key={film}>
                  <li>{film}</li>
                </NavLink>
              );
            })}
          </ul>

        </div>
      )}

    </div>
  );
};

const mapStateToProps = state => ({
  planet: state.planet,
});

const mapDispatchToProps = dispatch => ({
  getPlanet: planetId => dispatch(getPlanetThunk(planetId)),
});

const PlanetWithRouter = withRouter(Planet);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(PlanetWithRouter);

Planet.propTypes = {
  getPlanet: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      planetId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  planet: planetPropType,
};

Planet.defaultProps = {
  planet: PropTypes.object,
};
