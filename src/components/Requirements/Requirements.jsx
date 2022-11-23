import { Default } from "../Default/Default";
import { Spinner1 } from "../Spinner1/Spinner1";

export const Requirements = ({name, size, color1, color2, color3, color4, width}) => {
    const type = typeof name === "string" ? name : "default";

    return (
        <>
            {type === "default" ? <Default size={size} color1={color1} color2={color2} color3={color3} color4={color4} width={width} /> : null}

            {type === "spinner1" ? <Spinner1 size={size} color1={color1} width={width} /> : null}
        </>
    );
}