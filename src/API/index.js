import axios from "axios";
import _ from "lodash";

function getHeaders(method, accessToken, customHeaders = {}) {
  let headers = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  if (_.isEqual("post", _.lowerCase(method))) {
    headers["Accept"] = "application/json";
  }

  // if(_.isString(accessToken)){
  //   headers["Authorization"] = "Bearer $ " + accessToken
  // }
  return headers;
}

export default (paramsObj) => {
  const { data } = paramsObj;
  return axios({
    ...data,
    headers: getHeaders(data.method, data.headers),
    url: data.url,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      const { statusText, status } = error.response || {};
      const errorObj = { statusText, status, response: error.response };
      console.error("ParamsObj: ", paramsObj, "errorObj: ", errorObj);
      throw errorObj;
    });
};
