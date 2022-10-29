import React from 'react'
import './Buttons.css'

const Buttons = ({text}) => {
    return (
        <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {text}
        </button>
    )
}

export default Buttons