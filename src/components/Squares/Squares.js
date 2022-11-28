import React from "react";
import "./index.css";

export const Squares = ({size, color1, color2, width}) => {
    const realSize = typeof size === "number" ? size : 50;
    const realWidth = typeof width === "number" ? width : 5;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";
    const realColor2 = typeof color2 === "string" ? color2 : "red";

    const styles1 = {
        width:`${realSize}px`, height:`${realSize}px`,
        border : `${realWidth}px solid ${realColor1}`
    }

    const styles2 = {
        width:`${realSize}px`, height:`${realSize}px`,
        border : `${realWidth}px solid ${realColor2}`
    }

    return (
        <div className="squares">
            <div style={styles1}></div>
            <div style={styles2}></div>
        </div>
    )
}