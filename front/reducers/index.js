// 리듀서

// 안정성, state 통제 용이

// {
// is LoggedIn: false, // 로그인 여부 -> A, C
// user: {}, // 로그인한 사용자 -> B, C
// mainPosts: [{comment:[]}].  // 메인 게시글들 -> C
// ...
// } --> store

// Action -> state를 바꾸는 행동 ex) 로그인액션
// Dispatch -> action을 실행 ex) 로그인 액션 dispatch
// Reducer -> Action의 결과로 state를 어떻게 바꿀지 정의
// ex) 로그인액션 dispatch시 -> isLoggedIn를 true로

// 파일구조 잘 잡아야 함
// 단, root store(부모스토어)가 필요

import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
