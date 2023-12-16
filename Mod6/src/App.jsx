import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting />
      <Greeting name="Jason" />
      <BigCats />

    </>
  );
}

export default App;
