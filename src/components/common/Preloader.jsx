import React from 'react';
import './Preloader.scss';
import preloader from '../../assets/preloader/Dual_Ring-1s-200px.svg';

export const Preloader = () => (
  <div className="preloader">
    <img src={preloader} alt="preloader" className="preloader__img" />
  </div>
);
