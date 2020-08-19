// API함수 하나, watch함수 하나, watch에서 뭘할지 함수 하나가 세트로
// watchABC함수를 통해 takeevery일지 latest일지 실행주기 정의하고
// 그다음에 ABC함수를 실행하는 패턴임
// 서버에 요청을 보내는 부분

// try, catch 사용이유: API를 받지 못할 수 있으므로
// 에러날 가능성이 있을 경우 모듈을 살리기 위함
//순서를 지켜서 함수를 실행할 땐 call
// put은 dispatch와 동일

//연속으로 값 막 누르면 마지막것만 적용해서 유효하게 하겠다면 takeLatest
//매번 연결시키려면 (while(true))처럼 -> takeevery
//로그인버튼 두번클릭시 실수니깐(takelatest로 쓰는게 나을듯)
//반면 카운트같은 경우 모든클릭 유효하니 takeevery를 쓰는것

// call, fork는 함수를 실행시켜 줌
// call은 동기호출, fork는 비동기호출
// call은 응답을 받을때까지 기다림
// fork는 순서상관없이 그냥 바로 실행시킴(안써도 상관없는데 써야함)
import axios from "axios";
import {
  all,
  takeLatest,
  takeEvery,
  call,
  put,
  take,
  delay,
  fork,
} from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";

function loginAPI() {
  return axios.post("/login");
}

function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI() {
  //서버에 요청을 보내는 부분
  return axios.post("/login");
}

function* signUp() {
  try {
    yield call(signUpAPI);
    yield put({ type: SIGN_UP_SUCCESS });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
    });
  }
}
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, login);
}

// 1. login 요청을 해서 상단의 login함수(LOG_IN액션 실행)
// 실행되게 함(비동기동작 위한 대기) 만약 그러면 LOG_IN_SUCCESS 실행
// 반복문 넣는 이유: 예를들어 빼면 로그아웃후 다시 로그인시 작동불가 방지

// function* watchLogin() {
//   while (true) {
//     yield take(LOG_IN);
//     yield delay(2000);
//     // put: saga의 dispatch
//     put({
//       type: LOG_IN_SUCCESS,
//     });
//   }
// }

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
