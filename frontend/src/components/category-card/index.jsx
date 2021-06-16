import react from 'react';

import './styles.css'

const categoryCard = (props) => {
    return (
        <article className="category-card">
            <div className="category-card-image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="category-card-content">
                <h4>{props.category}</h4>
                <p>{props.courseAmount} Cursos</p>
            </div>                            
        </article>
    )
}

export default categoryCard;