import React from "react";
import {HeartSVG} from "../SVGComponents/HeartSVG"

export const Heart = ({size, color1}) => {
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
            opacity : 0.5
        },
        visible : {
            opacity : 1,
            scale : 0.9,
            transition : {
                yoyo : Infinity
            }
        }
    }

    return <HeartSVG height={realSize} width={realSize} color={realColor1} svgVariants={svgVariants} pathVariants={pathVariants} />
}