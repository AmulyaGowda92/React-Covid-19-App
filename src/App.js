import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/COVID19.jpg';

import Cards from './components/Cards';
import { fetchData } from './services/api';
import Countries from './components/Countries';
import Chart from './components/Chart';


function App() {

  const [data, setData] = useState([]);
  //const [country, setCountry] = useState('');
  
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
      //console.log(data);
    }
    
    getData();

  },[])


  const handleChangeCountry = async (country) => {
    
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    //setCountry(country);
    console.log(fetchedData);

  }


  return (
    <div className="app">
      <div className="container">
        <h3>Covid-19 Tracker</h3>
        <img src={logo} alt="logo corona" />
        <Cards data={data} />
        <Countries handleChangeCountry={handleChangeCountry} />
        <Chart data={data} />
      </div>
    </div>
  );
}

export default App;
