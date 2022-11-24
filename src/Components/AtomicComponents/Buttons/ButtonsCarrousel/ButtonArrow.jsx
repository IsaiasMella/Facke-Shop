import React from 'react'
import Arrow from '../../../../Icons/Arrow'
import './ButtonArrow.css'

const ButtonArrow = ({ tipo }) => {
    return (
        <div className={`container__arrow_button ${tipo}`}>
            <Arrow stroke='#fff' />
        </div>
    )
}

export default ButtonArrow