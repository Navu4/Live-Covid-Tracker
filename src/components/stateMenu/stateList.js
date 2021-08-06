import React from 'react';
import { useHistory } from 'react-router-dom';
const StateList = (props) => {
  let history = useHistory();

  const data = props.data;

  const stateClick = (e) => {
    const card = data.filter((val) => {
      return val.state === e.target.textContent;
    });

    history.push(`/states/${card[0].state}`);
  };

  return (
    <>
      <div className="cardList" onClick={stateClick}>
        {data.map((cardData) => {
          return (
            <div
              className={`card card_${Math.floor(Math.random() * 6 + 1)}`}
              style={{ alignItems: 'center' }}
            >
              <div className="card_inner">
                <p className="card_total card_small">{cardData.state}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StateList;
