import React, { useState, useEffect } from 'react';
import { getCovidData } from '../../container/dataManager';
import Card from '../card/card';
import Loader from '../loader/loader';
import Heading from '../heading/heading';


const SingleState = (props) => {
  const state = props.statecode;
  console.log(state);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();

  const getData = async () => {
    const vData = await getCovidData();
    const statewise = vData.statewise;
    const val = statewise.filter((ele) => {
      return (ele.state === state);
    });

    setData(val[0]);
    setLoader(false);
    console.log( data, loader);
  };

  useEffect(() => {
    getData();
  }, []);

  return loader ? (
    <Loader></Loader>
  ) : (
    <>
      <section>
          <Heading ></Heading>
          <Card data={data}></Card>
      </section>
    </>
  );
};

export default SingleState;
