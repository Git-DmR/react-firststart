import React from "react";
import ContentBlock from "../components/home";
import MenuAppBar from "../components/navbar";
import { RESPONSE, FILMLIST } from "../helpers";
import SearchAppBar from "../components/searchInput";
import { values } from "lodash";
import BasicPagination from "../modules/MaterialUI/Pagination";
import { connect } from "react-redux";

const HomeContainer = (props) => {
  console.log("HOME CONTAINER PROPS:", props);
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
      {/* <ContentBlock content={RESPONSE} opts={opts} onReady={onReady} /> */}
      <hr />
      <SearchAppBar handleOnChange={handleOnChange} />
      <hr />
      <ul>{listItems}</ul>
      <hr />
      <BasicPagination />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE:", state);
  return {
    accessToken: state && state.dataReducer && state.dataReducer.data && state.dataReducer.data.accessTokenn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, null)(HomeContainer);
