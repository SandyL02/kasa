

import React from 'react';

export default function Banner(props) {
  const { page } = props;

  const bannerClass = page === 'home' ? 'banner-home' : 'banner-about';

  return (
    <div className={`banner ${bannerClass}`}>
      <div className="filter"></div>
      {page === 'home' && (
        <p className="text-banner">Chez vous, partout et ailleurs</p>
      )}
    </div>
  );
}