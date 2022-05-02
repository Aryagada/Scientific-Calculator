import React, { useEffect, useState } from 'react'

const Operators = (props) => {
  // const [props.result, setResult] = useState("");

  const [history, setHistory] = useState("");
  const [result, setResult] = useState("");
  const [resultarr, setResultarr] = useState([]);

  useEffect(() => {
    var test = JSON.parse(localStorage.getItem("result"));
    if (test != null) {
      setResultarr(test);
    }
  }, []);

  const clear = () => {
    props.setResult("");
    // props.setHistory("");

    // localStorage.clear();
  };
  const clearall = () => {
    props.setResult("");
    props.setHistory("");

    localStorage.clear();
  };


  function backspace(e) {
    props.setResult(props.result.slice(0, -1));
    props.setHistory(props.history.slice(0, -1));

  }


  const equals = () => {
    props.setResult(eval(props.result));
    props.setHistory(props.result + "=" + eval(props.result));

    props.resultarr.push(props.result + "=" + eval(props.result));

    localStorage.setItem("result", JSON.stringify(props.resultarr));
  };

  const sin = () => {
    props.setResult("sin(" + props.result + ")=" + Math.sin(props.result));
    props.setHistory("sin(" + props.result + ")=" + Math.sin(props.result));
    props.resultarr.push("sin(" + props.result + ")=" + Math.sin(props.result));
    localStorage.setItem("result", JSON.stringify(props.resultarr));
  };

  const cos = () => {
    props.setResult("cos(" + props.result + ")=" + Math.cos(props.result));
    props.setHistory("cos(" + props.result + ")=" + Math.cos(props.result));
    props.resultarr.push("cos(" + props.result + ")=" + Math.cos(props.result));
    localStorage.setItem("result", JSON.stringify(props.resultarr));
  };

  const tan = () => {
    props.setResult("tan(" + props.result + ")=" + Math.tan(props.result));
    props.setHistory("tan(" + props.result + ")=" + Math.tan(props.result));
    props.resultarr.push("tan(" + props.result + ")=" + Math.tan(props.result));
    localStorage.setItem("result", JSON.stringify(props.resultarr));
  };

  const log = () => {
    props.setResult("log(" + props.result + ")=" + Math.log(props.result));
    props.setHistory("log(" + props.result + ")=" + Math.log(props.result));
    props.resultarr.push("log(" + props.result + ")=" + Math.log(props.result));
    localStorage.setItem("result", JSON.stringify(props.resultarr));
    // history.value+="log";
  };



  return (

    <div>
      <div className="numbers">


        <span className="input" id="inputoperator"></span>

        <div className="operator">

          <button name="ClearAll" type="button" className="clearall" onClick={clearall}>Clear All</button>

          <button name="log" type="button" className="btn btn-primary" onClick={log}>log</button>
          <button name="C" type="button" className="btn btn-primary" onClick={backspace}>Back</button>
          <button name="Clear" type="button" className="clear" onClick={clear}>Clear</button>

          <button name="sin" type="button" className="btn btn-primary" onClick={sin} >sin</button>
          <button name="cos" type="button" className="btn btn-primary" onClick={cos}>cos</button>
          <button name="tan" type="button" className="btn btn-primary" onClick={tan}>tan</button>
          <button name="=" type="button" className="btn btn-primary" onClick={equals} >=</button>


        </div>
      </div>

    </div>


  )
}

export default Operators
