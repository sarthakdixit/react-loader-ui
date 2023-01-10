import React from "react";
import { Default } from "../Default/Default";
import { Spinner1 } from "../Spinner1/Spinner1";
import { Spinner2 } from "../Spinner2/Spinner2";
import { Coin } from "../Coin/Coin";
import { Fan } from "../Fan/Fan";
import { Circles } from "../Circles/Circles";
import { Bounce } from "../Bounce/Bounce";
import { FlipBox } from "../FlipBox/FlipBox";
import { Floors } from "../Floors/Floors";
import {Square} from "../Square/Square";
import { Lines } from "../Lines/Lines";
import { WiFi } from "../WiFi/WiFi";
import { Heart } from "../Heart/Heart";
import { MusicBars } from "../MusicBars/MusicBars";
import { HandWave } from "../HandWave/HandWave";

export const Requirements = ({name, size, color1, color2, color3, color4, width}) => {
    const type = typeof name === "string" ? name : "default";

    return (
        <>
            {type === "default" ? <Default size={size} color1={color1} color2={color2} color3={color3} color4={color4} width={width} /> : null}

            {type === "spinner1" ? <Spinner1 size={size} color1={color1} width={width} /> : null}

            {type === "spinner2" ? <Spinner2 size={size} color1={color1} color2={color2} width={width} /> : null}

            {type === "coin" ? <Coin size={size} color1={color1} width={width} /> : null}

            {type === "fan" ? <Fan size={size} color1={color1} /> : null}

            {type === "circles" ? <Circles size={size} color1={color1} /> : null}

            {type === "bounce" ? <Bounce size={size} color1={color1} /> : null}

            {type === "flipbox" ? <FlipBox size={size} color1={color1} /> : null}

            {type === "floors" ? <Floors size={size} color1={color1} color2={color2} /> : null}

            {type === "square" ? <Square size={size} color1={color1} color2={color2} /> : null}

            {type === "lines" ? <Lines size={size} color1={color1} width={width} /> : null}

            {type === "wifi" ? <WiFi size={size} color1={color1} /> : null}

            {type === "heart" ? <Heart size={size} color1={color1} /> : null}

            {type === "musicbars" ? <MusicBars size={size} color1={color1} /> : null}

            {type === "handwave" ? <HandWave size={size} color1={color1} /> : null}
        </>
    );
}