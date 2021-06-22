import { takeEvery, all, call, put } from "redux-saga/effects";
import lodash from "lodash";
import * as callMethods from "./callMethods";
import ApiService from "../API/index";
import _ from "lodash";

export function* mySagaGeneric(action) {
  const data = callMethods[_.camelCase(action.type)]();

  data.data.email = action.payload.email;
  data.data.password = action.payload.password;

  try {
    const response = yield call(ApiService, {
      data,
    });

    const newType = action.type.replace("_REQEST", "_SUCCESS");
    yield put({ type: newType, response, payload: action.payload });
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

export function* mySagaAll(action) {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), mySagaGeneric);
}

export function* rootSaga() {
  yield all([mySagaAll()]);
}
