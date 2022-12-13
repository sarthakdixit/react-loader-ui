import React from "react";
import {MusicBarsSVG} from "../SVGComponents/MusicBarsSVG"

export const MusicBars = ({size, color1}) => {
    const realSize = typeof size === "number" ? size : 50;
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
            },
            visible : {
                scale : 0.7,
                transition : {
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        },
        {
            hidden : {
            },
            visible : {
                scale : 0.7,
                transition : {
                    delay : 0.3,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        },
        {
            hidden : {
            },
            visible : {
                scale : 0.7,
                transition : {
                    delay : 0.5,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        },
        {
            hidden : {
            },
            visible : {
                scale : 0.7,
                transition : {
                    delay : 0.7,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        },
        {
            hidden : {
            },
            visible : {
                scale : 0.7,
                transition : {
                    delay : 0.9,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        },
        {
            hidden : {
            },
            visible : {
                scale : 0.7,
                transition : {
                    delay : 1.1,
                    duration : 0.5,
                    yoyo : Infinity
                }
            }
        }
    ]

    return <MusicBarsSVG height={realSize} width={realSize} color={realColor1} svgVariants={svgVariants} pathVariants={pathVariants} />
}