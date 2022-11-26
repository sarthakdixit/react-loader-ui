import React from "react";
import "./index.css";

export const Bounce = ({size, color1}) => {
    const realSize = typeof size === "number" ? size : 20;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";

    const styles = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`
    }

    return <div className="bounce" style={styles}></div>
}