import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import loader from  './assets/loader.gif'

function App() {
  const [fv, setFv] = useState("");
  const [loading, setloading] = useState(false);
  const [rData, setRdata] = useState([]);
  const [err, setErr] = useState('')
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
    if(data.status >= 400 && data.status <= 600){
      // alert(data.status);
      const errorObj = await data.json();
      console.log(errorObj.url[0]);
      setErr(errorObj.url[0])
      setloading(false)
    } else {
      const dObj = await data.json();
      // console.log(dObj);
      const duplicate = rData.findIndex(el => el.hashid == dObj.hashid);
      // console.log(duplicate);
     if(duplicate === 0 ) {
      setErr('This URL is in the List, Please Enter Different URL')
      setloading(false)
      return
     }
 
        setloading(false)
        setErr('')
        setRdata([...rData, dObj]);
      
    
      
    }
    
  }

  return (
    <div className="App">
      <h1 className="title"> Shortly </h1>
      <div className="search">
        <div className="search__box">
      <Input fetVal={fv} handleChange={(e) => setFv(e.target.value)} error={err} />
      </div>

      <div className="search__button">
      <button onClick={shorten} className={loading ? 'disable': ''}>Shorten It</button>
      </div>
           </div>

      <div className="listContainer">
        {
           loading ? <><div className="loading"><img src={loader} /></div></> : ""
        }
        {
          <ul>
            <List data ={rData} />
          </ul> 
       
      }  
      </div>
  
    </div>
  );


}

export default App;
