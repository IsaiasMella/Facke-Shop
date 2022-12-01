import React from 'react'
import './Buttons.css'

const Buttons = ({ text, tipo = 'button__sale', tipoSpan = 'span__sale', action,id }) => {
    return (
        <button className={tipo} onClick={() => action(id)} >
            <span className={tipoSpan}></span>
            <span className={tipoSpan}></span>
            <span className={tipoSpan}></span>
            <span className={tipoSpan}></span>
            {text}
        </button>
    )
}

export default Buttons