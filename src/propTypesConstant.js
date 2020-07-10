import PropTypes from 'prop-types';

export const filmsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    opening_crawl: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.string).isRequired,
    planets: PropTypes.arrayOf(PropTypes.string).isRequired,
    starships: PropTypes.arrayOf(PropTypes.string).isRequired,
    vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
    species: PropTypes.arrayOf(PropTypes.string).isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
);

// export const matchPropType = PropTypes.shape({

// });
