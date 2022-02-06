import { useState } from "react";

const FunctionalComponent = ({ name, greeting }) => {
  const [number, setNumber] = useState(0);

  const btnPlus = () => {
    setNumber(number + 1);
  };

  const btnMins = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <h1>ini adalah functional component menggunakan arrow function (rafc)</h1>
      <h2>
        Hallo {name}, {greeting} (ini props)
      </h2>
      <h3>dibawah ini adalah hook</h3>
      <button onClick={btnMins}>-</button>
      <span> {number} </span>
      <button onClick={btnPlus}>+</button>
    </div>
  );
};

export default FunctionalComponent;
