import React, { useState, useEffect } from 'react';
import { getCovidData } from '../../container/dataManager';
import Card from '../card/card';
import Heading from '../heading/heading';
import Loader from '../loader/loader';
import '../covid/covid.css'

const Covid = (props) => {
  const location = props.location;
  const [loader, setLoader] = useState(true)
  const [data, setData] = useState();
  const getData = async () => {
    const actucalData = await getCovidData(); // API CALL
    if (location === 'india') {
      setData(actucalData.statewise[0]);
    } else {
      setData(actucalData.statewise);
    }
    setLoader(false)
  };

  useEffect(() => {
    getData();
  }, []);

  
  return loader ? <Loader></Loader> : (
    <>
      <section>
        <Heading></Heading>
        <Card data={data} location={location} ></Card>
      </section>
    </>
  );
};

export default Covid;
