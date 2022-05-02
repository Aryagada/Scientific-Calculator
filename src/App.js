import React, { useEffect, useState } from 'react'

import './App.css';
import Numbers from "./components/numbers"
import Operators from "./components/operators"
import Theme from './components/theme'


import {
  // BrowserRouter as Router,

  // Route,

} from "react-router-dom";

function App() {
  const [result, setResult] = useState("");
  const [resultarr, setResultarr] = useState([]);
  const [history, setHistory] = useState("");

  useEffect(() => {
    var test = JSON.parse(localStorage.getItem("result"));
    if (test != null) {
      setResultarr(test);
    }
  }, []);

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    setHistory(result.concat(e.target.name));
    console.log(e.target.name);
    history.value += result;
  };


  return (
    <>
    <div className='container'>

    
      <div className='calculator'>
        <span className="input" id="inputGroup"></span>
        <input type="text" value={result} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

        <div >
          <Operators result={result} setResult={setResult} history={history} setHistory={setHistory} resultarr={resultarr} setResultarr={setResultarr}  />
        </div>

        <div onClick={handleClick}>
          <Numbers history={history} setHistory={setHistory} />
        </div>

        {/* <div className='history'> */}
        <span className="history" id="inputHistory"></span>
        <input type="text" value={history} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />


       history:
        {resultarr.map((data) => {
          return <p>{data}</p>;
        })}
        {/* </div> */}
      </div>
      <div>
          <Theme/>
          
        </div>
      </div>

    </>



  );
}

export default App;
