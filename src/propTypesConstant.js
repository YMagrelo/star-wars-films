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

export const filmDetailsPropTypes = PropTypes.shape({
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
});

export const characterPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  species: PropTypes.arrayOf(PropTypes.string).isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
  starships: PropTypes.arrayOf(PropTypes.string).isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const planetPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  rotation_period: PropTypes.string.isRequired,
  orbital_period: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  surface_water: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  residents: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const starshipsPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  cost_in_credits: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  max_atmosphering_speed: PropTypes.string.isRequired,
  crew: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  cargo_capacity: PropTypes.string.isRequired,
  consumables: PropTypes.string.isRequired,
  hyperdrive_rating: PropTypes.string.isRequired,
  MGLT: PropTypes.string.isRequired,
  starship_class: PropTypes.string.isRequired,
  pilots: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const vehiclePropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  cost_in_credits: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  max_atmosphering_speed: PropTypes.string.isRequired,
  crew: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  cargo_capacity: PropTypes.string.isRequired,
  consumables: PropTypes.string.isRequired,
  vehicle_class: PropTypes.string.isRequired,
  pilots: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const speciesPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  classification: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  average_height: PropTypes.string.isRequired,
  skin_colors: PropTypes.string.isRequired,
  hair_colors: PropTypes.string.isRequired,
  eye_colors: PropTypes.string.isRequired,
  average_lifespan: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
