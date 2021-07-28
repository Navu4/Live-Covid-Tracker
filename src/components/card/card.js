import React, { useEffect, useState } from 'react';
import './card.css';

const Card = (name, info) => {
  const [data, setdata] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setdata(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="card card_1">
        <div className="card_inner">
          <p className="card_name">
            <span>OUR</span> COUNTRY
          </p>
          <p className="card_total card_small">INDIA</p>
        </div>
      </div>
      <div className="card card_2">
        <div className="card_inner">
          <p className="card_name">
            <span>TOTAL</span> RECOVERED
          </p>
          <p className="card_total card_small">{data.recovered}</p>
        </div>
      </div>
      <div className="card card_3">
        <div className="card_inner">
          <p className="card_name">
            <span>TOTAL</span> CONFIRTMED
          </p>
          <p className="card_total card_small">{data.confirmed}</p>
        </div>
      </div>
      <div className="card card_4">
        <div className="card_inner">
          <p className="card_name">
            <span>TOTAL</span> DEATHS
          </p>
          <p className="card_total card_small">{data.deaths}</p>
        </div>
      </div>
      <div className="card card_5">
        <div className="card_inner">
          <p className="card_name">
            <span>TOTAL</span> ACTIVE
          </p>
          <p className="card_total card_small">{data.active}</p>
        </div>
      </div>{' '}
      <div className="card card_6">
        <div className="card_inner">
          <p className="card_name">
            <span>LAST</span> UPDATED
          </p>
          <p className="card_total card_small">{data.lastupdatedtime}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
