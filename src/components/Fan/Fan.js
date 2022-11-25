import React from "react";
import "./index.css";

export const Fan = ({size, color1}) => {
    const realSize = typeof size === "number" ? size : 20;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";

    const triangleUpStyle = {
        width:0,
        height:0,
        borderLeft:`${0.5*realSize}px solid transparent`,
        borderRight:`${0.5*realSize}px solid transparent`,
        borderBottom:`${realSize}px solid ${realColor1}`
    }

    const triangleDownStyle = {
        width:0,
        height:0,
        borderLeft:`${0.5*realSize}px solid transparent`,
        borderRight:`${0.5*realSize}px solid transparent`,
        borderTop:`${realSize}px solid ${realColor1}`
    }

    return (
        <div className="fan">
            <div className="top-triangle" style={triangleDownStyle}></div>
            <br></br>
            <div className="bottom-triangle" style={triangleUpStyle}></div>
        </div>
    )
}