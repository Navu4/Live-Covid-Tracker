export const covidLiveData = async () => {
  try {
    const res = await fetch('https://api.covid19india.org/data.json');
    return res.json(); // console.log(actualData.statewise[0]);
  } catch (error) {
    return error;
  }
};
