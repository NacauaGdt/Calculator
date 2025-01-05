import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    if (num == 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }

  function clear() {
    setNum(0);
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator == "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator == "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    } else if (operator == "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator == "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator == "√") {
      setNum(Math.sqrt(parseFloat(num)));
    }
  }

  function deleteLast() {
    setNum(num.toString().slice(0, -1) || 0);
  }

  return (
    <div className="container">
      <div className="result">{num}</div>
      <div className="wrapper">
        <button className="blue" onClick={clear}>AC</button>
        <button onClick={inputNum} value={1}>
          1
        </button>
        <button onClick={inputNum} value={2}>
          2
        </button>
        <button onClick={operatorHandler} value={"/"}>
          /
        </button>
        <button onClick={inputNum} value={3}>
          3
        </button>
        <button onClick={inputNum} value={4}>
          4
        </button>
        <button onClick={inputNum} value={5}>
          5
        </button>
        <button className="gray" onClick={operatorHandler} value={"x"}>
          x
        </button>
        <button onClick={inputNum} value={6}>
          6
        </button>
        <button onClick={inputNum} value={7}>
          7
        </button>
        <button onClick={inputNum} value={8}>
          8
        </button>
        <button className="gray" onClick={operatorHandler} value={"-"}>
          -
        </button>
        <button onClick={inputNum} value={9}>
          9
        </button>
        <button onClick={inputNum} value={0}>
          0
        </button>
        <button className="gray" onClick={operatorHandler} value={"+"}>
          +
        </button>
        <button className="gray" onClick={operatorHandler} value={"√"}>
          √
        </button>
        <button onClick={inputNum} value={"."}>
          .
        </button>
        <button className="blue" onClick={calculate}>=</button>
        <button className="blue" onClick={deleteLast}>Del</button>
      </div>
    </div>
  );
};

export default Calculator;
