import React from "react";
import { Bmipage } from "./pages/Bmipage";
import "./App.css"

const App =()=>{
  return (<>
  <h5 className="text-center mt-4">BMI Converter{<Bmipage/>}</h5>
    
  </>);
}
export default App;