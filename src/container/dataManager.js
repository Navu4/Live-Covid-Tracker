import { covidLiveData } from "../services/covidLiveData"

export const getCovidData = async () =>{
    const data = await covidLiveData();
    return data;
}

