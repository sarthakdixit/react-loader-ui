import React from "react";
import "./index.css";

export const Floors = ({size, color1, color2}) => {
    const realSize = typeof size === "number" ? size : 50;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";
    const realColor2 = typeof color2 === "string" ? color2 : "red";

    const styles = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        background:`${realColor1}`,
        color:`${realColor2}`
    }

    return <div className="floors" style={styles}></div>
}