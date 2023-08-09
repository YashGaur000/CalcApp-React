import React from "react"

export const Button=(props)=>{
    const clicked=()=>{
        
    }
    return (<>
        <button onClick={clicked} classname={props.className} > {props.value}</button>
    </>)
}