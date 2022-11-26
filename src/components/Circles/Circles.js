import React from "react";
import "./index.css";

export const Circles = ({size, color1}) => {
    const realSize = typeof size === "number" ? size : 10;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";

    const styles1 = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`,
    }

    const styles2 = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`,
        marginLeft : `${0.8*realSize}px`
    }

    return (
        <div className="circles" style={{width:`${realSize*7}px`}}>
            <div style={styles1}></div>
            <div style={styles2}></div>
            <div style={styles2}></div>
            <div style={styles2}></div>
        </div>
    )
}