import { useState } from "react";
import Welcome from "./components/Welcome";
import Questionnaire from "./components/QuestionContainre";

function App() {
  
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    localStorage.setItem('sessionId', Date.now());
  };

  return (
    <div className="w-full h-screen">
       
      {!started ? (
        <Welcome onStart={handleStart} />
      ) : (
        <Questionnaire />
      )}
     
    </div>
  )
}

export default App
