import { useState } from "react"
import Mengano from "./mengano"

import "./pirulo.css"

const Pirulo = ()=>{

    const[state, setState] = useState(false)

    const clickHandler =()=>{
        setState(!state)
    }

    return(
        <>
        <h1>hola gil</h1>
        <button className={state? "boton rojo" : "boton blanco"} onClick={clickHandler}>boton</button>
        {state?<Mengano/>:null}
        </>
    )
}

export default Pirulo