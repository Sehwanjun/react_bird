webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, LOAD_FOLLOW_REQUEST, LOAD_FOLLOW_SUCCESS, LOAD_FOLLOW_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_REQUEST", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_SUCCESS", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_FAILURE", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_REQUEST", function() { return LOAD_FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_SUCCESS", function() { return LOAD_FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_FAILURE", function() { return LOAD_FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_REQUEST", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_SUCCESS", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_FAILURE", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 초기값(추후 dummy값을 이쪽으로 옮겨야 함)
var dummyUser = {
  nickname: "제로초",
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {}
};
var initialState = {
  isLoggedIn: false,
  //로그인 여부
  isLoggedOut: false,
  // 로그아웃 시도중
  isLoggingIn: false,
  // 로그인 시도중
  logInErrorReason: "",
  // 로그인 에러 사유
  signedUp: false,
  // 회원가입 성공
  isSigningUp: false,
  // 회원가입 시도중
  signUpErrorReason: "",
  // 회원가입 실패 사유
  me: null,
  followingList: [],
  //팔로잉 리스트
  followerList: [],
  // 팔로우 리스트
  userInfo: null //남의 정보

}; //action명 - 비동기(서버쪽 응답필요한) - request,succ,fail 3개, 동기는(서버필요X) 1개
// 서버쪽 응답 필요하다면 redux saga까지..

var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE"; // 로그인 후 사용자 정보 불러오기

var LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
var LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
var LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE"; // 다른사람 팔로우

var FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
var FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
var FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE"; // 팔로우, 팔로잉 친구들 불러오기

var LOAD_FOLLOW_REQUEST = "LOAD_FOLLOW_REQUEST";
var LOAD_FOLLOW_SUCCESS = "LOAD_FOLLOW_SUCCESS";
var LOAD_FOLLOW_FAILURE = "LOAD_FOLLOW_FAILURE"; // 다른사람 언팔로우 하기

var UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
var UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
var UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE"; // 내 팔로워 제거하기(이상한 사람 삭제)

var REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
var REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
var REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
var ADD_POST_TO_ME = "ADD_POST_TO_ME"; //action 정의
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

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: true,
          // isLoading: true,
          logInErrorReason: ""
        });
      }

    case LOG_IN_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: true,
          me: dummyUser,
          isLoading: false
        });
      }

    case LOG_IN_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: false,
          logInErrorReason: action.error,
          me: null
        });
      }

    case LOG_OUT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: false,
          user: null
        });
      }

    case SIGN_UP_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signUpData: action.data
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbImR1bW15VXNlciIsIm5pY2tuYW1lIiwiUG9zdCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJzaWduVXBEYXRhIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2VkT3V0IiwiaXNMb2dnaW5nSW4iLCJsb2dJbkVycm9yUmVhc29uIiwic2lnbmVkVXAiLCJpc1NpZ25pbmdVcCIsInNpZ25VcEVycm9yUmVhc29uIiwibWUiLCJmb2xsb3dpbmdMaXN0IiwiZm9sbG93ZXJMaXN0IiwidXNlckluZm8iLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJGT0xMT1dfVVNFUl9SRVFVRVNUIiwiRk9MTE9XX1VTRVJfU1VDQ0VTUyIsIkZPTExPV19VU0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV19SRVFVRVNUIiwiTE9BRF9GT0xMT1dfU1VDQ0VTUyIsIkxPQURfRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19VU0VSX1JFUVVFU1QiLCJVTkZPTExPV19VU0VSX1NVQ0NFU1MiLCJVTkZPTExPV19VU0VSX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlzTG9hZGluZyIsImVycm9yIiwidXNlciIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QURMO0FBRUVsQyxxQkFBVyxFQUFFLEtBRmY7QUFHRUYsb0JBQVUsRUFBRSxLQUhkO0FBSUVHLDBCQUFnQixFQUFFa0MsTUFBTSxDQUFDRyxLQUozQjtBQUtFakMsWUFBRSxFQUFFO0FBTE47QUFPRDs7QUFDRCxTQUFLYSxlQUFMO0FBQXNCO0FBQ3BCLCtDQUNLZ0IsS0FETDtBQUVFcEMsb0JBQVUsRUFBRSxLQUZkO0FBR0V5QyxjQUFJLEVBQUU7QUFIUjtBQUtEOztBQUNELFNBQUs5QixlQUFMO0FBQXNCO0FBQ3BCLCtDQUNLeUIsS0FETDtBQUVFdEMsb0JBQVUsRUFBRXVDLE1BQU0sQ0FBQ0s7QUFGckI7QUFJRDs7QUFDRDtBQUFTO0FBQ1AsaUNBQ0tOLEtBREw7QUFHRDtBQTVDSDtBQThDRCxDQS9DRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5iNzQ5MjIzMGEzYmM0MzM3YTExMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g7LSI6riw6rCSKOy2lO2bhCBkdW1teeqwkuydhCDsnbTsqr3snLzroZwg7Jiu6rKo7JW8IO2VqClcclxuY29uc3QgZHVtbXlVc2VyID0ge1xyXG4gIG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiLFxyXG4gIFBvc3Q6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbiAgc2lnblVwRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLCAvL+uhnOq3uOyduCDsl6zrtoBcclxuICBpc0xvZ2dlZE91dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkVycm9yUmVhc29uOiBcIlwiLCAvLyDroZzqt7jsnbgg7JeQ65+sIOyCrOycoFxyXG4gIHNpZ25lZFVwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyEseqztVxyXG4gIGlzU2lnbmluZ1VwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcEVycm9yUmVhc29uOiBcIlwiLCAvLyDtmozsm5DqsIDsnoUg7Iuk7YyoIOyCrOycoFxyXG4gIG1lOiBudWxsLFxyXG4gIGZvbGxvd2luZ0xpc3Q6IFtdLCAvL+2MlOuhnOyeiSDrpqzsiqTtirhcclxuICBmb2xsb3dlckxpc3Q6IFtdLCAvLyDtjJTroZzsmrAg66as7Iqk7Yq4XHJcbiAgdXNlckluZm86IG51bGwsIC8v64Ko7J2YIOygleuztFxyXG59O1xyXG5cclxuLy9hY3Rpb27rqoUgLSDruYTrj5nquLAo7ISc67KE7Kq9IOydkeuLte2VhOyalO2VnCkgLSByZXF1ZXN0LHN1Y2MsZmFpbCAz6rCcLCDrj5nquLDripQo7ISc67KE7ZWE7JqUWCkgMeqwnFxyXG4vLyDshJzrsoTsqr0g7J2R64u1IO2VhOyalO2VmOuLpOuptCByZWR1eCBzYWdh6rmM7KeALi5cclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuLy8g66Gc6re47J24IO2bhCDsgqzsmqnsnpAg7KCV67O0IOu2iOufrOyYpOq4sFxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbi8vIOuLpOuluOyCrOuejCDtjJTroZzsmrBcclxuZXhwb3J0IGNvbnN0IEZPTExPV19VU0VSX1JFUVVFU1QgPSBcIkZPTExPV19VU0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19VU0VSX1NVQ0NFU1MgPSBcIkZPTExPV19VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19VU0VSX0ZBSUxVUkUgPSBcIkZPTExPV19VU0VSX0ZBSUxVUkVcIjtcclxuXHJcbi8vIO2MlOuhnOyasCwg7YyU66Gc7J6JIOy5nOq1rOuTpCDrtojrn6zsmKTquLBcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbi8vIOuLpOuluOyCrOuejCDslrjtjJTroZzsmrAg7ZWY6riwXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX1JFUVVFU1QgPSBcIlVORk9MTE9XX1VTRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfVVNFUl9TVUNDRVNTID0gXCJVTkZPTExPV19VU0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1VTRVJfRkFJTFVSRSA9IFwiVU5GT0xMT1dfVVNFUl9GQUlMVVJFXCI7XHJcblxyXG4vLyDrgrQg7YyU66Gc7JuMIOygnOqxsO2VmOq4sCjsnbTsg4HtlZwg7IKs656MIOyCreygnClcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcclxuXHJcbi8vYWN0aW9uIOygleydmFxyXG4vLyBleHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gZGF0YSA9PiB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuLy8gICAgIGRhdGEsXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzaWduVXBTdWNjZXNzID0ge1xyXG4vLyAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBkYXRhID0+IHtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbi8vICAgICBkYXRhLFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IHtcclxuLy8gICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9nSW5TdWNjZXNzID0ge1xyXG4vLyAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4vLyB9O1xyXG5cclxuLy8g64+Z7KCB642w7J207YSw64qUIO2VqOyImOulvCDthrXtlbQg64Sj7Ja07JW8IO2VqFxyXG4vLyAoe30pIOydtOqxtCDrsJTroZwgcmV0dXJu7ZWY64qUIOqygyDsg53rnrXrrLjrspVcclxuLy8gZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSBkYXRhID0+ICh7XHJcbi8vICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4vLyAgIGRhdGE6IGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgICAgLy8gaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGxvZ0luRXJyb3JSZWFzb246IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgbWU6IGR1bW15VXNlcixcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRToge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICBsb2dJbkVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNpZ25VcERhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==