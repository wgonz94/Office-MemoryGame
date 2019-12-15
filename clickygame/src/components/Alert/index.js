import React from "react";
import "./style.css";


const Alert = props => (
<div>
    {props.message ? ( <p>{props.message}
    </p>) : <p className="default-msg"> Click an image to Start!</p>}
</div>
)


export default Alert;
