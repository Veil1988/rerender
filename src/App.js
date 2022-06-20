import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter(counter + 1);
  const dec = () => setCounter(counter - 1);

  return (
    <div>
      <h1>{counter}</h1>
      <Buttons inc={inc} dec={dec} />
    </div>
  );
}

const Buttons = ({ inc, dec }) => {
  console.log("render Buttons");
  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};
