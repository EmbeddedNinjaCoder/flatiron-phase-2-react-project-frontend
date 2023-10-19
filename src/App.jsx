import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";

// main components
import Header from "./components/Header";
import About from "./components/About";
import Test from "./components/Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Test />
      <About />
    </>
  );
}

export default App;
