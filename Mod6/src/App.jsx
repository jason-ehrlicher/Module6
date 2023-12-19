import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";
import Emoji from "./components/Emoji";
import Calculator from "./components/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting />
      <Greeting name="Jason" />
      <br />
      <BigCats />
      <Emoji />
      <br />
      <Calculator />

    </>
  );
}

export default App;
