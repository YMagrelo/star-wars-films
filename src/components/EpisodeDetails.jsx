import React, { useEffect } from 'react';
import './EpisodeDetails.scss';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getFilmDetailsThunk } from '../redux/reducer';

const EpisodeDetails = (props) => {
  const { details, getFilmDetails } = props;
  const { filmId } = props.match.params;

  useEffect(() => {
    getFilmDetails(filmId);
  }, []);

  return (
    <div className="details">
      <NavLink to="/"><span>Back to home page</span></NavLink>
      <h1 className="details__heading">Episode details</h1>

      {details && (
        <div className="details__details-content content">
          <h5 className="content__title">{`Title: ${details.title}`}</h5>
          <p className="content__item">
            {`Opening crawl: ${details.opening_crawl}`}
          </p>
          <p className="content__item">
            {`Director: ${details.director}`}
          </p>
          <p className="content__item">
            {`Producer: ${details.producer}`}
          </p>
          <p className="content__item">
            {`Release date: ${details.release_date}`}
          </p>
          <ul className="content__item">
            Characters:
            {details.characters.map(char => (
              <li key={char}>{char}</li>
            ))}
          </ul>
          <ul className="content__item">
            Planets:
            {details.planets.map(planet => (
              <li key={planet}>{planet}</li>
            ))}
          </ul>
          <ul className="content__item">
            Starships:
            {details.starships.map(starship => (
              <li key={starship}>{starship}</li>
            ))}
          </ul>
          <ul className="content__item">
            Vehicles:
            {details.vehicles.map(vehicle => (
              <li key={vehicle}>{vehicle}</li>
            ))}
          </ul>
          <ul className="content__item">
            Species:
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

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetailsWithRouter);
