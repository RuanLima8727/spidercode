import react, { useEffect } from 'react';
import './styles.css';

const Animation = () => {

    setTimeout(()=>{
        document.getElementById("bg-animation").style = "display:none";
    }, 2000) 


    return (
        <div className="bg-animation" id="bg-animation">
            <div className="animation">
                <h2>Spider Code</h2>
            </div>
        </div> 
    )
}

export default Animation;