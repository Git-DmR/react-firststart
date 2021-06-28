import { takeEvery, all, call, put, takeLatest } from "redux-saga/effects";
import lodash from "lodash";
import * as callMethods from "./callMethods";
import ApiService from "../API/index";
import _ from "lodash";
import { push } from "react-router-redux";

export function* mySagaGeneric(action) {
  const method = _.camelCase(action.type);
  const dataPayload = callMethods[method](action.payload);
  try {
    const response = yield call(ApiService, {
      dataPayload,
    });
    console.log("RESPONCE:", response);
    const newType = action.type.replace("_REQUEST", "_SUCCESS");
    yield put({ type: newType, response, payload: response });
  } catch (e) {
    const errorModel = {
      type: action.type.replace("_REQUEST", "_FAILED"),
      payload: action.payload,
      message: e.statusText,
      status: e.status,
      response: e.response,
    };
    console.error(errorModel);
    yield put(errorModel);
  }
}

export function* loginSuccess(action) {
  console.log("TUT");
  yield put(push("/home"));
}

export function* mySagaAll(action) {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), mySagaGeneric);
  yield takeLatest("LOGIN_SUCCESS", loginSuccess);
}

export function* rootSaga() {
  yield all([mySagaAll()]);
}
