import React from "react";
import "./index.css";

export const Square = ({size, color1, color2}) => {
    const realSize = typeof size === "number" ? size : 20;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";
    const realColor2 = typeof color2 === "string" ? color2 : "red";

    const styles = {
        width:0, 
        height:0,
        border : `${realSize}px solid ${realColor1}`,
        borderColor: `${realColor2} ${realColor1} ${realColor1} ${realColor1}`
    }

    return (
        <div className="square" style={styles}>
        </div>
    )
}