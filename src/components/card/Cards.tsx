import React from 'react';

import Card from './Card';
import { TravelObject } from '../../constants/types';

const Cards = (cards: TravelObject[]) => {
  return cards.map((card) => (
    <Card
      id={card.id}
      key={card.id}
      picture={card.picture}
      destination={card.destination}
      title={card.title}
      price={card.price}
      duration={card.duration}
      highlight={card.highlight}
      tag={card.tag}
    />
  ));
};

export default Cards;
