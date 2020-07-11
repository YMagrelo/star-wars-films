import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getStarshipThunk } from '../redux/reducer';
import { Preloader } from './common/Preloader';
import { starshipsPropType } from '../propTypesConstant';

const Starship = (props) => {
  const { starship, getStarship } = props;
  const { starshipId } = props.match.params;

  useEffect(() => {
    getStarship(starshipId);
  }, []);

  return (
    <div className="details">
      <NavLink to="/"><span>Home</span></NavLink>
      <h1 className="details__heading">Starship details</h1>
      {!starship && <Preloader />}
      {starship && (
        <div className="details__content content">
          <h3 className="content__title">{starship.name}</h3>
          <p className="content__item">
            <strong>Model: </strong>
            {starship.model}
          </p>
          <p className="content__item">
            <strong>Manufacturer: </strong>
            {starship.manufacturer}
          </p>
          <p className="content__item">
            <strong>Cost in credits: </strong>
            {' '}
            {starship.cost_in_credits}
          </p>
          <p className="content__item">
            <strong>Length: </strong>
            {' '}
            {starship.length}
          </p>
          <p className="content__item">
            <strong>Max atmosphering speed: </strong>
            {' '}
            {starship.max_atmosphering_speed}
          </p>
          <p className="content__item">
            <strong>Crew: </strong>
            {' '}
            {starship.crew}
          </p>
          <p className="content__item">
            <strong>Passengers: </strong>
            {' '}
            {starship.passengers}
          </p>
          <p className="content__item">
            <strong>Cargo capacity: </strong>
            {' '}
            {starship.cargo_capacity}
          </p>
          <p className="content__item">
            <strong>Consumables: </strong>
            {' '}
            {starship.consumables}
          </p>
          <p className="content__item">
            <strong>Hyperdrive rating: </strong>
            {' '}
            {starship.hyperdrive_rating}
          </p>
          <p className="content__item">
            <strong>MGLT: </strong>
            {' '}
            {starship.MGLT}
          </p>
          <p className="content__item">
            <strong>Starship class: </strong>
            {' '}
            {starship.starship_class}
          </p>
          <ul className="content__item">
            <strong>Pilots:</strong>
            {starship.pilots.map((pilot) => {
              const charId = pilot.slice(-2, -1);

              return (
                <NavLink to={`/people/${charId}`}>
                  <li key={pilot}>{pilot}</li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="content__item">
            <strong>Films:</strong>
            {starship.films.map((film) => {
              const filmId = film.slice(-2, -1);

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
  starship: state.starship,
});

const mapDispatchToProps = dispatch => ({
  getStarship: starshipId => dispatch(getStarshipThunk(starshipId)),
});

const StarshipWithRouter = withRouter(Starship);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(StarshipWithRouter);

Starship.propTypes = {
  getStarship: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      starshipId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  starship: starshipsPropType,
};

Starship.defaultProps = {
  starship: PropTypes.object,
};
