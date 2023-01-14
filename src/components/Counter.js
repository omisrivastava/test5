import { useState } from "react";
import Credits from "./Credits";

const Counter = ({ freq, name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="counterContainer">
      <h2 className="heading">
        {name}'s Counter App (freq :{freq} )
      </h2>
      <div className="countValue">Count: {count}</div>
      <button onClick={() => setCount(count + freq)}>Increment</button>
      <button onClick={() => setCount(count - freq)}>Decrement</button>
      <button onClick={() => setCount(-count)}>Change Sign</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Credits credits={name}/>
    </div>
  );
};

export default Counter;
