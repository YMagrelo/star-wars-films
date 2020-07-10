import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getCharacterThunk } from '../redux/reducer';
import { Preloader } from './common/Preloader';
import { characterPropType } from '../propTypesConstant';

const Character = (props) => {
  const { character, getCharacter } = props;
  const { charId } = props.match.params;

  useEffect(() => {
    getCharacter(charId);
  }, []);

  return (
    <div className="details">
      <NavLink to="/"><span>Home</span></NavLink>
      <h1 className="details__heading">Character details</h1>
      {!character && <Preloader />}
      {character && (
        <div className="details__content content">
          <h3 className="content__title">{character.name}</h3>
          <p className="content__item">
            <strong>Height: </strong>
            {character.height}
          </p>
          <p className="content__item">
            <strong>Mass: </strong>
            {character.mass}
          </p>
          <p className="content__item">
            <strong>Hair color: </strong>
            {' '}
            {character.hair_color}
          </p>
          <p className="content__item">
            <strong>Skin color: </strong>
            {' '}
            {character.skin_color}
          </p>
          <p className="content__item">
            <strong>Eye color: </strong>
            {' '}
            {character.eye_color}
          </p>
          <p className="content__item">
            <strong>Birth year: </strong>
            {' '}
            {character.birth_year}
          </p>
          <p className="content__item">
            <strong>Gender: </strong>
            {' '}
            {character.gender}
          </p>
          <p className="content__item">
            <strong>Home world: </strong>
            {' '}
            {character.homeworld}
          </p>
          <ul className="content__item">
            <strong>Films:</strong>
            {character.films.map((film) => {
              const filmId = film.slice(-2, -1);

              return (
                <NavLink to={`/films/${filmId}`}>
                  <li key={film}>{film}</li>
                </NavLink>
              );
            })}
          </ul>
          <ul className="content__item">
            <strong>Species:</strong>
            {character.species.map(specie => (
              <li key={specie}>{specie}</li>
            ))}
          </ul>
          <ul className="content__item">
            <strong>Vehicles:</strong>
            {character.vehicles.map(vehicle => (
              <li key={vehicle}>{vehicle}</li>
            ))}
          </ul>
          <ul className="content__item">
            <strong>Starships:</strong>
            {character.starships.map(starship => (
              <li key={starship}>{starship}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
};

const mapStateToProps = state => ({
  character: state.character,
});

const mapDispatchToProps = dispatch => ({
  getCharacter: charId => dispatch(getCharacterThunk(charId)),
});

const CharacterWithRouter = withRouter(Character);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(CharacterWithRouter);

Character.propTypes = {
  getCharacter: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      charId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  character: characterPropType.isRequired,
};
