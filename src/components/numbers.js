import React, { useState } from 'react'

const Numbers = () => {
  // const [result, setResult] = useState("");

  const [history, setHistory] = useState("");

  //   const [mode, setMode] = useState("light");

  const [resultarr, setResultarr] = useState([]);


  return (

    <div>
      <div>
        <div className="numbers">



          <div className="keypad">


            <button name='7' type="button" className="btn btn-primary" >7</button>
            <button name='8' type="button" className="btn btn-primary" >8</button>
            <button name='9' type="button" className="btn btn-primary" >9</button>
            <button name="+" type="button" className="btn btn-primary" >+</button>

            {/* <button name=")" type="button" className="btn btn-primary">)</button> */}

            <button name='4' type="button" className="btn btn-primary" >4</button>
            <button name='5' type="button" className="btn btn-primary" >5</button>
            <button name='6' type="button" className="btn btn-primary">6</button>
            <button name="-" type="button" className="btn btn-primary" >-</button>

            {/* <button name="(" type="button" className="btn btn-primary" >(</button> */}

            <button name='1' type="button" className="btn btn-primary" >1</button>
            <button name='2' type="button" className="btn btn-primary" >2</button>
            <button name='3' type="button" className="btn btn-primary" >3</button>
            <button name="/" type="button" className="btn btn-primary" >/</button>

            <button name='.' type="button" className="btn btn-primary" >.</button>
            <button name='0' type="button" className="btn btn-primary" >0</button>
            <button name="*" type="button" className="btn btn-primary" >*</button>



            {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>  */}
          </div>
        </div>
      </div>

    </div>

  )
}

export default Numbers
