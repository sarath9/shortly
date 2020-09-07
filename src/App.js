import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import loader from  './assets/loader.gif'

function App() {
  const [fv, setFv] = useState("");
  const [loading, setloading] = useState(false);
  const [rData, setRdata] = useState([]);
  const API_URL = "https://rel.ink/api/links/";
  const HEADERS = {
    'Content-Type': 'application/json'
  }
  const BODY = JSON.stringify({
    'url': fv
  })
  const shorten = () => {
    getData();
    setFv('')
  }

  const getData = async () => {
    setloading(true);
    const data = await fetch(API_URL, {
      method: 'POST',
      headers: HEADERS,
      body: BODY
    })
     const dObj = await data.json();
    //  const er = await Promise.reject(new Error('yahoo'));
     console.log(dObj);
    setloading(false)
    setRdata([...rData, dObj]);
   
  }

  return (
    <div className="App">
      <h1 className="title"> Shortly </h1>
      <div className="search">
        <div className="search__box">
      <Input fetVal={fv} handleChange={(e) => setFv(e.target.value)}  />
      </div>

      <div className="search__button">
      <button onClick={shorten}>Shorten It</button>
      </div>
      </div>

      <div className="listContainer">
        {
           loading ? <><div className="loading"><img src={loader} /></div></> : ""
        }
        {
          rData.length ? <ul>
            <List data ={rData} />
          </ul> : <div className="noData">No Data Found, Plese Add URL</div>
       
      }  
      </div>
  
    </div>
  );


}

export default App;
