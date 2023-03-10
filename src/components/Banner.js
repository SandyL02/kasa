

import React from 'react';

export default function Banner(props) {
  const { page } = props;

  const bannerClass = page === 'home' ? 'banner-home' : 'banner-about';
  const filterClass = page === 'home' ? 'filter-home' : 'filter-about';

  return (
    <div className={`banner ${bannerClass}`}>
      <div className={`filter ${filterClass}`}></div>
      {page === 'home' && (
        <p className="text-banner">Chez vous, partout et ailleurs</p>
      )}
    </div>
  );
}