import React from "react";
import "./style.css";


const Card = ({ id, name, handlePicked, image}) => (
    <div>
        <div className="card"
             key={id}
             data-name={name}
             name={name}
             style={{ backgroundImage: `url(${image})`}}
             onClick={handlePicked}>

        </div>
    </div>
)

export default Card;