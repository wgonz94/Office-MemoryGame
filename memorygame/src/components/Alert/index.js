import React from "react";
import "./style.css";


const Alert = props => (
<div>
    {props.message ? ( <p>{props.message}
    </p>) : <p className="default-msg"> Let's see if you can pick all 16 Office members!!</p>}
</div>
)


export default Alert;
