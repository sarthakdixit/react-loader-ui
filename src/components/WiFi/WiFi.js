import React from "react";
import { WiFiSVG } from "../SVGComponents/WiFiSVG";

export const WiFi = ({size, color1}) => {
    const realSize = typeof size === "number" ? size : 30;
    const realColor1 = typeof color1 === "string" ? color1 : "blue";

    const svgVariants = {
        hidden : {
        },
        visible : {
        }
    }

    const pathVariants = [
        {
            hidden : {
                opacity : 0.3
            },
            visible : {
                opacity : 1,
                transition : {
                    delay : 0.3,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        },
        {
            hidden : {
                opacity : 0.3
            },
            visible : {
                opacity : 1,
                transition : {
                    delay : 0.5,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        },
        {
            hidden : {
                opacity : 0.3
            },
            visible : {
                opacity : 1,
                transition : {
                    delay : 0.7,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        },
        {
            hidden : {
                opacity : 0.3
            },
            visible : {
                opacity : 1,
                transition : {
                    delay : 0.9,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        }
    ]

    return <WiFiSVG height={realSize} width={realSize} color={realColor1} svgVariants={svgVariants} pathVariants={pathVariants} />
}