import react from 'react'

import quoteR from '../../assets/images/quotesRight.svg'
import quoteL from '../../assets/images/quotesLeft.svg'


import './styles.css'

const CarouselItem = (props) => {
    return (
        <>
            <div className="user-image-review">
                <img src={props.image} alt="Imagem do usuario que fez o depoimento" />
            </div>
            <div className="review">
                <img src={quoteL} alt="Começo das aspas duplas" />
                <p>
                   {props.reviewText}
                </p>
                <img src={quoteR} alt="Final das aspas duplas" />
            </div>
            <div className="user-name-review">
                <h4>{props.reviewName}</h4>
            </div>
        </>
    )
}

export default CarouselItem