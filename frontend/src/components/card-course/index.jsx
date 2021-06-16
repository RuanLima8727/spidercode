import react from 'react';

import './styles.css'

const cardCourse = (props) => {
    return (
        <article>
            <img src={props.image} alt={props.alt}></img>
            <h4>{props.children}</h4>
        </article>
    )
}

export default cardCourse