import React from "react";
import dots from "../../images/dots.svg"
import { UserPropsOnDel } from "../../api/types"
const Dots = () => {


    return (<div className="dots">
        <img className="dots-img" src={dots} alt="dots"></img>
    </div>);
}

export default Dots;