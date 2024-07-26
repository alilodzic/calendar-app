import { useState } from "react";

import "./App.css";
import { Calender } from "./Calender";
import Spinner from "./components/Spinner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calender />
    </>
  );
}

export default App;
