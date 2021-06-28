import React from "react";
import ContentBlock from "../components/home";
import MenuAppBar from "../components/navbar";
import { RESPONSE, FILMLIST } from "../helpers";
import SearchAppBar from "../components/searchInput";
import { values } from "lodash";

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

  const { results } = FILMLIST;

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  const listItems = results.map((film) => <li>{film.title}</li>);

  return (
    <div>
      <MenuAppBar />
      <ContentBlock content={RESPONSE} opts={opts} onReady={onReady} />
      <hr />
      <SearchAppBar handleOnChange={handleOnChange} />
      <hr />
      <ul>{listItems}</ul>
    </div>
  );
};

export default HomeContainer;
