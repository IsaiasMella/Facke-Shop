import React from 'react'
import './Intereses.css'

const Intereses = ({ tipo, img='#' }) => {
    return (
        <div className='container__interes'>
            <div className="img-intereses">
                <img src={img} alt="" />
            </div>
            <div className="container__img-intereses">
            </div>
            <div className="container__tipo">
                <p className="tipo">{tipo}</p>
            </div>
        </div>
    )
}

export default Intereses