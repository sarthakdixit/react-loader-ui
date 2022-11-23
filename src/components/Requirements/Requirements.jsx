import { Default } from "../Default/Default";

export const Requirements = ({name, size, color1, color2, color3, color4, width}) => {
    const type = typeof name === "string" ? name : "default";

    return (
        <>
            {type === "default" ? <Default size={size} color1={color1} color2={color2} color3={color3} color4={color4} width={width} /> : null}
        </>
    );
}