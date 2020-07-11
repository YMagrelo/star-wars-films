import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getSpeciesThunk } from '../redux/reducer';
import { Preloader } from './common/Preloader';
import { speciesPropType } from '../propTypesConstant';
import { charUrlLength, filmsUrlLength, speciesUrlLength } from '../constants';

const Species = (props) => {
  const { species, getSpecies } = props;
  const { speciesId } = props.match.params;

  useEffect(() => {
    getSpecies(speciesId);
  }, []);

  return (
    <div className="details">
      <NavLink to="/"><span>Home</span></NavLink>
      <h1 className="details__heading">Species details</h1>
      {!species && <Preloader />}
      {species && (
        <div className="details__content content">
          <h3 className="content__title">{species.name}</h3>
          <p className="content__item">
            <strong>Classification: </strong>
            {species.classification}
          </p>
          <p className="content__item">
            <strong>Designation: </strong>
            {species.designation}
          </p>
          <p className="content__item">
            <strong>Average height: </strong>
            {' '}
            {species.average_height}
          </p>
          <p className="content__item">
            <strong>Skin colors: </strong>
            {' '}
            {species.skin_colors}
          </p>
          <p className="content__item">
            <strong>Hair colors: </strong>
            {' '}
            {species.hair_colors}
          </p>
          <p className="content__item">
            <strong>Eye colors: </strong>
            {' '}
            {species.eye_colors}
          </p>
          <p className="content__item">
            <strong>Average lifespan: </strong>
            {' '}
            {species.average_lifespan}
          </p>
          <p className="content__item">
            <strong>Homeworld: </strong>
            {' '}
            {species.homeworld && (
              <NavLink
                to={`/planets/${species.homeworld.slice(speciesUrlLength, -1)}`}
              >
                {species.homeworld}
              </NavLink>
            )}
          </p>
          <p className="content__item">
            <strong>Language: </strong>
            {' '}
            {species.language}
          </p>
          <ul className="content__item">
            <strong>Pilots:</strong>
            {species.people.map((char) => {
              const charId = char.slice(charUrlLength, -1);

              return (
                <NavLink to={`/people/${charId}`} key={char}>
                  <li>{char}</li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="content__item">
            <strong>Films:</strong>
            {species.films.map((film) => {
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
  species: state.species,
});

const mapDispatchToProps = dispatch => ({
  getSpecies: speciesId => dispatch(getSpeciesThunk(speciesId)),
});

const SpeciesWithRouter = withRouter(Species);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(SpeciesWithRouter);

Species.propTypes = {
  getSpecies: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      speciesId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  species: speciesPropType,
};

Species.defaultProps = {
  species: PropTypes.object,
};
