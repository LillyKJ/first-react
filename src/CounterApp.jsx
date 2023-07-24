import "./index.css";
import React from "react";

function CounterApp(props) {
  function handleAddCounter() {
    props.setCounter(props.counter + 1);
  }

  function handleSubtractCounter() {
    props.setCounter(props.counter - 1);
  }

  function handleResetCounter() {
    props.setCounter(0);
  }

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <h2>{props.counter}</h2>
      <div>
        <button onClick={handleAddCounter}>+</button>
        <button onClick={handleSubtractCounter}>-</button>
        <button onClick={handleResetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;