import React, { useState, useEffect } from 'react';
import { getCovidData } from '../../container/dataManager';
import Heading from '../heading/heading';
import Loader from '../loader/loader';
import StateList from './stateList';

const StateMenu = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();

  const getData = async () => {
    const vData = await getCovidData();
    setData(vData.statewise.splice(1, vData.statewise.length - 1));
    setLoader(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return loader ? (
    <Loader></Loader>
  ) : (
    <>
      <section>
        <Heading></Heading>
        <StateList data={data} ></StateList>
      </section>
    </>
  );
};

export default StateMenu;
