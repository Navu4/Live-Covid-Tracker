import React from 'react';
import { useHistory } from 'react-router-dom';
import '../cardList/cardList.css';

const CardList = (props) => {
  let history = useHistory();
  const data = props.data;

  const statePageClick = (e) => {
      history.push('/states');
  };

  return (
    <div className="cardList">
      <div className="card card_1 "  onClick={statePageClick}>
        <div className="card_inner">
          <p className="card_name">
            <span>OUR</span> {data.type}
          </p>
          <p className="card_total card_small">{data.place}</p>
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
    </div>
  );
};

export default CardList;
