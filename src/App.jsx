import CounterApp from "./CounterApp";
import React, { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="app">
			<CounterApp  counter={counter} setCounter={setCounter}  />
      {/* <footer>
				Current Counter is {counter}
			</footer> */}
		</div>
  )
}

export default App;
