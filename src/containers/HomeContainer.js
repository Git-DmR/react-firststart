import React from "react";
import GraphApp from "../components/graph";
import ContentBlock from "../components/home";
import MenuAppBar from "../components/navbar";
import { RESPONSE } from "../helpers";

const HomeContainer = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <MenuAppBar />
      <ContentBlock content={RESPONSE} opts={opts} onReady={onReady} />
      <hr />
      <GraphApp />
    </div>
  );
};

export default HomeContainer;
