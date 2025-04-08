import React, { useState } from "react";

const Input = ({ sendUserInputToParent }) => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 100,
    duration: 2,
  });
  const handleInput = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    sendUserInputToParent({
      ...userInput, //keep existing state
      [e.target.id]: +e.target.value, //update the current input
    });
  };
  console.log(userInput);

  return (
    <div>
      <form id="user-input">
        <div className="input-group">
          <label>Initial Investment</label>
          <input type="number" id="initialInvestment" onChange={handleInput} />
          <label>Annual Investment</label>
          <input type="number" id="annualInvestment" onChange={handleInput} />
        </div>
        <div className="input-group">
          <label>Expected Return</label>
          <input type="number" id="expectedReturn" onChange={handleInput} />
          <label>Duration</label>
          <input type="number" id="duration" onChange={handleInput} />
        </div>
      </form>
    </div>
  );
};

export default Input;
