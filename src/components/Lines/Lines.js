import React from "react";
import "./index.css";

export const Lines = ({size, color1, width}) => {
    const realSize = typeof size === "number" ? size : 30;
    const realWidth = typeof width === "number" ? width : 8;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";

    const styles = {
        width:`${realWidth}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`
    }

    const styles1 = {
        width:`${realWidth}px`, 
        height:`${realSize}px`,
        backgroundColor:`${realColor1}`,
        margin:`0px ${0.5*realWidth}px`
    }

    return (
        <span style={{height:`${realSize}px`}}>
        <span className="lines" style={styles}></span>
        <span className="lines" style={styles1}></span>
        <span className="lines" style={styles}></span>
        </span>
    )
}