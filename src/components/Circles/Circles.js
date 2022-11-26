import React from "react";
import "./index.css";

export const Circles = ({size, color1}) => {
    const realSize = typeof size === "number" ? size : 10;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";

    const styles1 = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`,
        left : `${0.8*realSize}px`
    }

    const styles2 = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`,
        left : `${0.8*realSize*3}px`
    }

    const styles3 = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`,
        left : `${0.8*realSize*5}px`
    }

    const styles4 = {
        width:`${realSize}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`,
        left : `${0.8*realSize*7}px`
    }

    return (
        <div className="circles">
            <div style={styles1}></div>
            <div style={styles2}></div>
            <div style={styles3}></div>
            <div style={styles4}></div>
        </div>
    )
}