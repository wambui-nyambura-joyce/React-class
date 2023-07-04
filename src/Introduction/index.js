import React from "react";
import './style.css'
import { Fa500Px } from "react-icons/fa";

const Introduction = () =>{
    return(
        <div className="body">
        <h1 className="heading">What I have learnt in React</h1>
        <p>React is a JavaScript library    <Fa500Px/></p>
     
        <img src="https://res.cloudinary.com/dgvoqgfly/image/upload/v1688057915/cld-sample-2.jpg" className="image"></img>
        <br></br>
        <br></br>
        <button className="btn">Let's Learn!!</button>
        </div>
    )
}

export default Introduction;
