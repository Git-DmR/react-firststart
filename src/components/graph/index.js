import React, { useLayoutEffect, useState } from "react";
import "./styles.css";
import { RadialChart } from "react-vis";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const GraphApp = () => {
  const [width, height] = useWindowSize();

  return (
    <RadialChart
      getLabel={(d) => d.label}
      data={[
        { angle: 1, color: "#FFF", name: "blue" },
        { angle: 1, color: "#000", name: "yellow" },
        { angle: 1, color: "#1E96BE", name: "cyan" },
        { angle: 1, color: "#F6D554", name: "crimson" },
        { angle: 1, color: "#F6D18A", name: "yellow again" },
      ]}
      labelsRadiusMultiplier={2.0}
      labelsStyle={{ fontSize: 16, fill: "#222" }}
      width={width}
      height={height}
    />
  );
};

export default GraphApp;
