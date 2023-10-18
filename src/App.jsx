import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";

// main components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Test from "./components/Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Test />
      {/* <Main /> */}
      <Footer />
    </>
  );
}

export default App;
