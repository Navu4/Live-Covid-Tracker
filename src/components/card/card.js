import React from 'react';
import CardList from '../cardList/cardList';

const Card = (props) => {
  const cardData = props.data;
  const location = props.location;
  console.log(
    location,
    cardData,
    cardData.state,
    cardData.recovered,
    cardData.confirmed,
    cardData.deaths,
    cardData.active,
    cardData.lastupdatedtime
  );
  const data = {
    type: location === 'india' ? 'COUNTRY' : 'STATE',
    place: cardData.state === 'Total' ? 'INDIA' : cardData.state,
    recovered: cardData.recovered,
    confirmed: cardData.confirmed,
    deaths: cardData.deaths,
    active : cardData.active,
    lastupdatedtime: cardData.lastupdatedtime,
  };

  return (
    <>
      <CardList data={data}></CardList>
    </>
  );
};

export default Card;
