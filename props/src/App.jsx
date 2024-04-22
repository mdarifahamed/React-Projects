import { useState } from "react";
import Card from "./components/card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 p-4 text-black rounded-xl mb-4">
        Hello Tailwind
      </h1>
      
        <Card username="Arif" btnText="click me"></Card>
        <Card username="ashif" ></Card> 
        {/* by defualt value */}
      
    </>
  );
}

export default App;
