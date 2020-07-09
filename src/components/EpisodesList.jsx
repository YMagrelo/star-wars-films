import React from 'react';
import './EpisodesList.scss';

export const EpisodesList = ({ films }) => (
  <ul className="movies__list">
    {films.map(film => (
      <li
        key={film.episode_id}
        className="movies__item"
      >

        {film.title}
      </li>
    ))}
  </ul>
);
