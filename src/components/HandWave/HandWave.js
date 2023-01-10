import React from "react";
import {HandWaveSVG} from "../SVGComponents/HandWaveSVG"

export const HandWave = ({size, color1}) => {
    const realSize = typeof size === "number" ? size : 50;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";

    const svgVariants = {
        hidden : {
        },
        visible : {
        }
    }

    const pathVariants = {
        hidden : {
            rotate: 10
        },
        visible : {
            rotate: -10,
            transition : {
                duration : 0.4,
                yoyo : Infinity
            }
        }
    }

    return <HandWaveSVG height={realSize} width={realSize} color={realColor1} svgVariants={svgVariants} pathVariants={pathVariants} />
}