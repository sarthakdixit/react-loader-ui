import React from "react";
import "./index.css";

export const Default = ({size, color1, color2, color3, color4, width}) => {
    const realSize = typeof size === "number" ? size : 120;
    const realWidth = typeof width === "number" ? width : 16;
    const realColor1 = typeof color1 === "string" ? color1 : "#f3f3f3";
    const realColor2 = typeof color2 === "string" ? color2 : "#3498db";
    const realColor3 = typeof color3 === "string" ? color3 : "#f3f3f3";
    const realColor4 = typeof color4 === "string" ? color4 : "#f3f3f3";

    const styles = {
        width:`${realSize}px`, height:`${realSize}px`,
        borderTop : `${realWidth}px solid ${realColor1}`,
        borderRight : `${realWidth}px solid ${realColor2}`,
        borderBottom : `${realWidth}px solid ${realColor3}`,
        borderLeft : `${realWidth}px solid ${realColor4}`,
    }

    return <div className="loader" style={styles}></div>
}