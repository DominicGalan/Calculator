import React from 'react';
import './App.css';
import { useState } from "react";


function CalcButton({lineargradient, label, buttonClassName = "CalcButton", onClick}) {

  return (
    <button className= {buttonClassName} onClick={onClick} style={{ background: lineargradient }}>
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

  const[n1, setN1] = useState(null);
  const[n2, setN2] = useState(null);
  const[op, setOp] = useState(null);

  const clrClickHandler = (e) => {
    setDisp(0);
    setN1(null);
    setN2(null);
    setOp(null);
  
  }

  const equalClickHandler = (e) => {
    console.log('Num1 ' + n1 + 'l ' + 'Op ' + op + 'l ' + 'Num2 ' + n2);
    if (op === "+") {
      setDisp(parseInt(n1) + parseInt(n2))
    } else if (op === "-") {
      setDisp(parseInt(n1) - parseInt(n2))
    } else if (op === "÷") {
      setDisp(parseInt(n1) / parseInt(n2))
    } else if (op === "x") {
      setDisp(parseInt(n1) * parseInt(n2))
    } else {
      setDisp ('Invalid Operation')
    }
  }

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;

    if (op === null) {
      if (n1 === null){
        setN1(value);
        setDisp(value);
      } else {
        setN1(n1 + value);
        setDisp(n1 + value);
      }
    } else {
      if (n2 === null){
        setN2(value);
        setDisp(value);
      } else {
        setN2(n2 + value);
        setDisp(n2 + value);
      }
    }
  }
  const opClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    setOp(value);
    setDisp(value);
    //alert('You clicked: ' + value);
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={"÷"} onClick={opClickHandler} lineargradient={'#535dc7'}/>
          <CalcButton label={7} onClick={numberClickHandler}/>
          <CalcButton label={8} onClick={numberClickHandler}/>
          <CalcButton label={9} onClick={numberClickHandler}/>
          <CalcButton label={"x"} onClick={opClickHandler} lineargradient={'#535dc7'}/>
          <CalcButton label={4} onClick={numberClickHandler}/>
          <CalcButton label={5} onClick={numberClickHandler}/>
          <CalcButton label={6} onClick={numberClickHandler}/>
          <CalcButton label={"+"} onClick={opClickHandler} lineargradient={'#535dc7'}/>
          <CalcButton label={1} onClick={numberClickHandler}/>
          <CalcButton label={2} onClick={numberClickHandler}/>
          <CalcButton label={3} onClick={numberClickHandler}/>
          <CalcButton label={"-"} onClick={opClickHandler} lineargradient={'#535dc7'}/>
          <CalcButton label={"C"} onClick={clrClickHandler} lineargradient={'#c75353'}/>
          <CalcButton label={0} onClick={numberClickHandler}/>
          <CalcButton label={"="} onClick={equalClickHandler} lineargradient={'#59c753'}/>
        </div>
      </div>
    </div>
  );
}