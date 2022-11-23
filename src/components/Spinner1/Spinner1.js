import React from "react";
import "./index.css";

export const Spinner1 = ({size, color1, width}) => {
    const realSize = typeof size === "number" ? size : 120;
    const realWidth = typeof width === "number" ? width : 8;
    const realColor1 = typeof color1 === "string" ? color1 : "#3498db";

    const styles = {
        width:`${realSize}px`, 
        height:`${realSize}px`
    }

    const styles1 = {
        width:`${0.8*(realSize)}px`, 
        height:`${0.8*(realSize)}px`,
        border : `${realWidth}px solid ${realColor1}`,
        margin : `${realWidth}px`,
        borderColor : `${realColor1} transparent transparent transparent`
    }

    return (
        <div class="spinner1" style={styles}>
            <div style={styles1}></div>
            <div style={styles1}></div>
            <div style={styles1}></div>
            <div style={styles1}></div>
        </div>
    )
}