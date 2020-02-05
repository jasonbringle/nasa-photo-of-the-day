import React, { useState,useEffect } from "react";
import "./App.css";
import Buttons from './Buttons/Buttons';
import Description from './Description/Description';
import axios from 'axios';
import Image from './Image/Image'


function App() {
  const [picData, setPicData] = useState([]);
  const [day, setDay] = useState("01");
  const [month, setMonth] =useState("01");
  const [year, setYear] = useState("2020")

  const randomDay = Math.floor((Math.random() * 30) + 1);
  const randomMonth = Math.floor((Math.random() * 12) + 1);
  
  function randomYear(){
    
    return Math.floor(Math.random() * (2019 - 1997 + 1) + 1997);
  };

  console.log(randomYear(2013,2019))
  


  useEffect(() => {
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=gYyisI1LHqwbW7zSloS0gQx7F0RTEEACvdQIbem3&date=${year}-${month}-${day}`)
        .then(response => {setPicData(response.data);
        })
        .catch(error => console.log(error));
    },[year,month,day]);
    console.log('display picData', picData);

  
  return (
    <div className="App">
      <Buttons 
      setDay={setDay}
      setMonth={setMonth}
      setYear={setYear}
      randomDay={randomDay}
      randomMonth={randomMonth}
      randomYear={randomYear}
      useState={useState}
      />
      <Image 
      picData={picData}
      />
      <Description
      picData={picData}
     />
    </div>
  );
}

export default App;
