
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import Table from "./components/Table";
import { use } from "react";

function App() {
  

  const [userInput, setUserInput] = useState({});

  const handleReceivedInput = (input) => {
    setUserInput(input); //receive input from child component and set it to state instantly
  }
  console.log(userInput);
  
  return (
    <>
      <Header title="Investment Calculator" />
      <Input sendUserInputToParent={handleReceivedInput}/>
      <Table inputData={userInput}/>
    </>
  );
}

export default App;
