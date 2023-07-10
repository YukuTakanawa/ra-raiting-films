import React from 'react';

import { Star } from './Star';

type TStars = {
  count?: number;
};

export const Stars: React.FC<TStars> = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return <></>;
  }

  const arrayOfStars = Array.from({ length: count }, (_v, k) => k);
  
  return (
    <ul className="card-stars u-clearfix">
      {arrayOfStars.map((key) => (
        <Star key={key} />
      ))}
    </ul>
  );
};