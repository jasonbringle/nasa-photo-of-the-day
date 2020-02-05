import React, { useState,useEffect } from "react";
import "./App.css";
import Buttons from './Buttons';
import Description from './Description';
import axios from 'axios';
import Image from './Image'


function App() {
  const [picData, setPicData] = useState()


  useEffect(() => {
    axios
        .get("https://api.nasa.gov/planetary/apod?api_key=WDbqkGtElcGRZbYES31GoTaRLkf2LXa5LFW8V7L5")
        .then(response => {setPicData(response.data);
        })
        .catch(error => console.log(error));
    },[]);
    console.log('display picData', picData);

  
  return (
    <div className="App">
      <Buttons />
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
