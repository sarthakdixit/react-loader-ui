import React from "react";
import "./index.css";

export const Coin = ({size, color1, width}) => {
    const realSize = typeof size === "number" ? size : 64;
    const realWidth = typeof width === "number" ? width : 8;
    const realColor1 = typeof color1 === "string" ? color1 : "red";

    const styles = {
        width:`${realSize}px`, height:`${realSize}px`,
        margin:`${realWidth}px`,
        background:`${realColor1}`
    }

    return (
        <div className="coin">
            <div style={styles}></div>
        </div>
    )
}