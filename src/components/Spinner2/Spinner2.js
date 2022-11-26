import React from "react";
import "./index.css";

export const Spinner2 = ({size, color1, color2, width}) => {
    const realSize = typeof size === "number" ? size : 50;
    const realWidth = typeof width === "number" ? width : 5;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";
    const realColor2 = typeof color2 === "string" ? color2 : "red";

    const circle1Style = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        borderTop:`${realWidth}px solid ${realColor1}`,
        borderRight:`${realWidth}px solid ${realColor1}`
    }

    const circle2Style = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        borderBottom:`${realWidth}px solid ${realColor2}`,
        borderLeft:`${realWidth}px solid ${realColor2}`
    }

    return (
        <div className="spinner2" style={circle1Style}>
            <div style={circle2Style}></div>
        </div>
    )
}