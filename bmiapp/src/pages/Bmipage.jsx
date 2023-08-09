import React from "react";
import { Button } from "../components/Button";
import { Textfield } from "../components/Textfield";
import { Radio } from "../components/Radio";

export const Bmipage=()=>{
    return (<div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <p>Age :  <Textfield className="alert alert-light" place="enter your age"/></p>
        <p>Gender : <Radio/> Male <Radio/> Female</p>
        <p>Enter your height :  <Textfield className="alert alert-light" place="enter your height"/></p>
        <p>Enter your weight :  <Textfield className="alert alert-light" place="enter your weight"/></p>
        <Button className="btn btn-success" value="Calculate"/>
        <p>Result :  <Textfield className="alert alert-light"/></p>
        </div>);
}