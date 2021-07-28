import React from 'react'
import Card from '../card/card';
import './covid.css';

const Covid = () => {

    return (
        <>
          <section>

            <div className='heading_container'>
                <h1  className='live'>🔴 LIVE </h1>
                <h2>COVID-19  CORONAVIRUS </h2>
            </div>

            <div className='card_list'>
                <Card />
            </div>
          </section>

        </>
    )
}

export default Covid;
