import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getVehicleThunk } from '../redux/reducer';
import { Preloader } from './common/Preloader';
import { vehiclePropType } from '../propTypesConstant';
import { charUrlLength, filmsUrlLength } from '../constants';

const Vehicle = (props) => {
  const { vehicle, getVehicle } = props;
  const { vehicleId } = props.match.params;

  useEffect(() => {
    getVehicle(vehicleId);
  }, []);

  return (
    <div className="details">
      <NavLink to="/"><span>Home</span></NavLink>
      <h1 className="details__heading">Vehicle details</h1>
      {!vehicle && <Preloader />}
      {vehicle && (
        <div className="details__content content">
          <h3 className="content__title">{vehicle.name}</h3>
          <p className="content__item">
            <strong>Model: </strong>
            {vehicle.model}
          </p>
          <p className="content__item">
            <strong>Manufacturer: </strong>
            {vehicle.manufacturer}
          </p>
          <p className="content__item">
            <strong>Cost in credits: </strong>
            {' '}
            {vehicle.cost_in_credits}
          </p>
          <p className="content__item">
            <strong>Length: </strong>
            {' '}
            {vehicle.length}
          </p>
          <p className="content__item">
            <strong>Max atmosphering speed: </strong>
            {' '}
            {vehicle.max_atmosphering_speed}
          </p>
          <p className="content__item">
            <strong>Crew: </strong>
            {' '}
            {vehicle.crew}
          </p>
          <p className="content__item">
            <strong>Passengers: </strong>
            {' '}
            {vehicle.passengers}
          </p>
          <p className="content__item">
            <strong>Cargo capacity: </strong>
            {' '}
            {vehicle.cargo_capacity}
          </p>
          <p className="content__item">
            <strong>Consumables: </strong>
            {' '}
            {vehicle.consumables}
          </p>
          <p className="content__item">
            <strong>Vehicle class: </strong>
            {' '}
            {vehicle.vehicle_class}
          </p>
          <ul className="content__item">
            <strong>Pilots:</strong>
            {vehicle.pilots.map((pilot) => {
              const charId = pilot.slice(charUrlLength, -1);

              return (
                <NavLink to={`/people/${charId}`} key={pilot}>
                  <li>{pilot}</li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="content__item">
            <strong>Films:</strong>
            {vehicle.films.map((film) => {
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
  vehicle: state.vehicle,
});

const mapDispatchToProps = dispatch => ({
  getVehicle: vehicleId => dispatch(getVehicleThunk(vehicleId)),
});

const VehicleWithRouter = withRouter(Vehicle);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(VehicleWithRouter);

Vehicle.propTypes = {
  getVehicle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      vehicleId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  vehicle: vehiclePropType,
};

Vehicle.defaultProps = {
  vehicle: PropTypes.object,
};
