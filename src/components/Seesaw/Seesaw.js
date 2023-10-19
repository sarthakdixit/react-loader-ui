import React from "react";
import "./index.css";

export const Seesaw = ({
  barColor,
  barHeight,
  barWidth,
  barBorderRadius,
  ballColor,
  ballHeight,
  ballWidth,
  ballMarginTop,
  ballBottom,
}) => {
  const realBarColor = typeof barColor === "string" ? barColor : "red";
  const realBarHeight = typeof barHeight === "number" ? barHeight : 12.5;
  const realBarWidth = typeof barWidth === "number" ? barWidth : 200;
  const realBarBorderRadius =
    typeof barBorderRadius === "number" ? barBorderRadius : 30;

  const realBallColor = typeof ballColor === "string" ? ballColor : "blue";
  const realBallHeight = typeof ballHeight === "number" ? ballHeight : 50;
  const realBallWidth = typeof ballWidth === "number" ? ballWidth : 50;
  const realBallMarginTop =
    typeof ballMarginTop === "number" ? ballMarginTop : 50;
  const realBallBottom = typeof ballBottom === "number" ? ballBottom : 50;

  const barStyle = {
    backgroundColor: realBarColor,
    width: realBarWidth,
    height: realBarHeight,
    borderRadius: realBarBorderRadius,
  };

  const ballStyle = {
    backgroundColor: realBallColor,
    width: realBallWidth,
    height: realBallHeight,
    marginTop: realBallMarginTop,
    bottom: realBallBottom,
  };

  return (
    <div className="bar" style={barStyle}>
      <div className="ball" style={ballStyle}></div>
    </div>
  );
};
