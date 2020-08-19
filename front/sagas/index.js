import { all, call } from "redux-saga/effects";
import user from "./user";
import post from "./post";

export default function* rootSaga() {
  yield applyMiddleware([call(user), call(post)]);
}
