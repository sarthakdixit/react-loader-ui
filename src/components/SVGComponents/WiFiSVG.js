import * as React from "react";
import { motion } from "framer-motion";

export const WiFiSVG = ({height, width, color, svgVariants, pathVariants}) => {
  return (
    <motion.svg
  fill={color}
  height={height}
  width={width}
    viewBox="0 0 512 512"
    variants={svgVariants}
    initial="hidden"
    animate="visible"
  >
    <g>
      <g>
        <motion.path d="M286.117,385.614c-16.606-16.607-43.629-16.607-60.235,0c-16.607,16.607-16.607,43.629,0,60.236 c8.303,8.304,19.211,12.456,30.117,12.456s21.815-4.151,30.117-12.456C302.724,429.244,302.724,402.221,286.117,385.614z" variants={pathVariants[0]} />
      </g>
    </g>
    <g>
      <g>
        <motion.path d="M150.588,310.321l30.117,30.117c41.518-41.517,109.07-41.517,150.588,0l30.117-30.117 C303.288,252.198,208.712,252.198,150.588,310.321z" variants={pathVariants[1]} />
      </g>
    </g>
    <g>
      <g>
        <motion.path d="M256,160.176c-68.262,0-132.438,26.582-180.706,74.851l30.117,30.117c40.223-40.223,93.704-62.376,150.588-62.376 c56.884,0,110.365,22.153,150.588,62.376l30.117-30.117C388.438,186.758,324.262,160.176,256,160.176z" variants={pathVariants[2]} />
      </g>
    </g>
    <g>
      <g>
        <motion.path d="M256,53.694c-96.704,0-187.62,37.659-256,106.039l30.117,30.117C90.453,129.515,170.674,96.287,256,96.287 s165.547,33.228,225.883,93.564L512,159.733C443.62,91.353,352.704,53.694,256,53.694z" variants={pathVariants[3]} />
      </g>
    </g>
  </motion.svg>
  )
}
