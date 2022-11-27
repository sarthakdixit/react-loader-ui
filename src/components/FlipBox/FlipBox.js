import React from "react";
import "./index.css";

export const FlipBox = ({size, color1}) => {
    const realSize = typeof size === "number" ? size : 50;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";

    const styles = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`
    }

    return <div className="flip-box" style={styles}></div>
}