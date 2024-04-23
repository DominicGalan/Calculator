import React from 'react';
import './App.css';
import { useState } from "react";


function CalcButton({label, buttonClassName = "CalcButton", onClick}) {

  return (
    <button className= {buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {

  const[disp, setDisp] = useState(0);

  const clickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    setDisp(value);
    //alert('You clicked: ' + value);
  }

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    setDisp(value);
    //alert('You clicked: ' + value);
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={"/"} onClick={clickHandler}/>
          <CalcButton label={7} onClick={numberClickHandler}/>
          <CalcButton label={8} onClick={numberClickHandler}/>
          <CalcButton label={9} onClick={numberClickHandler}/>
          <CalcButton label={"*"} onClick={clickHandler}/>
          <CalcButton label={4} onClick={numberClickHandler}/>
          <CalcButton label={5} onClick={numberClickHandler}/>
          <CalcButton label={6} onClick={numberClickHandler}/>
          <CalcButton label={"+"} onClick={clickHandler}/>
          <CalcButton label={1} onClick={numberClickHandler}/>
          <CalcButton label={2} onClick={numberClickHandler}/>
          <CalcButton label={3} onClick={numberClickHandler}/>
          <CalcButton label={"-"}  onClick={clickHandler}/>
          <CalcButton label={"C"} onClick={clickHandler}/>
          <CalcButton label={0} onClick={numberClickHandler}/>
          <CalcButton label={"="} onClick={clickHandler}/>
        </div>
      </div>
    </div>
  );
}