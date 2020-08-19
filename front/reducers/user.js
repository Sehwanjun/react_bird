// 초기값(추후 dummy값을 이쪽으로 옮겨야 함)
const dummyUser = {
  nickname: "제로초",
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {},
};

export const initialState = {
  isLoggedIn: false, //로그인 여부
  isLoggedOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  logInErrorReason: "", // 로그인 에러 사유
  signedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: "", // 회원가입 실패 사유
  me: null,
  followingList: [], //팔로잉 리스트
  followerList: [], // 팔로우 리스트
  userInfo: null, //남의 정보
};

//action명 - 비동기(서버쪽 응답필요한) - request,succ,fail 3개, 동기는(서버필요X) 1개
// 서버쪽 응답 필요하다면 redux saga까지..

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

// 로그인 후 사용자 정보 불러오기
export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

// 다른사람 팔로우
export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

// 팔로우, 팔로잉 친구들 불러오기
export const LOAD_FOLLOW_REQUEST = "LOAD_FOLLOW_REQUEST";
export const LOAD_FOLLOW_SUCCESS = "LOAD_FOLLOW_SUCCESS";
export const LOAD_FOLLOW_FAILURE = "LOAD_FOLLOW_FAILURE";

// 다른사람 언팔로우 하기
export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

// 내 팔로워 제거하기(이상한 사람 삭제)
export const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
export const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
export const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";

//action 정의
// export const signUpAction = data => {
//   return {
//     type: SIGN_UP_REQUEST,
//     data,
//   };
// };

// export const signUpSuccess = {
//   type: SIGN_UP_SUCCESS,
// };

// export const loginRequestAction = data => {
//   return {
//     type: LOG_IN_REQUEST,
//     data,
//   };
// };

// export const logoutRequestAction = {
//   type: LOG_OUT_REQUEST,
// };

// export const logInSuccess = {
//   type: LOG_IN_SUCCESS,
// };

// 동적데이터는 함수를 통해 넣어야 함
// ({}) 이건 바로 return하는 것 생략문법
// export const signUpRequestAction = data => ({
//   type: SIGN_UP_REQUEST,
//   data: data,
// });

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        // isLoading: true,
        logInErrorReason: "",
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: dummyUser,
        isLoading: false,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        logInErrorReason: action.error,
        me: null,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
