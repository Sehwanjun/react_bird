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
          isLoggingIn: true // isLoading: true,
          // logInErrorReason: "",

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbImR1bW15VXNlciIsIm5pY2tuYW1lIiwiUG9zdCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJzaWduVXBEYXRhIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2VkT3V0IiwiaXNMb2dnaW5nSW4iLCJsb2dJbkVycm9yUmVhc29uIiwic2lnbmVkVXAiLCJpc1NpZ25pbmdVcCIsInNpZ25VcEVycm9yUmVhc29uIiwibWUiLCJmb2xsb3dpbmdMaXN0IiwiZm9sbG93ZXJMaXN0IiwidXNlckluZm8iLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJGT0xMT1dfVVNFUl9SRVFVRVNUIiwiRk9MTE9XX1VTRVJfU1VDQ0VTUyIsIkZPTExPV19VU0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV19SRVFVRVNUIiwiTE9BRF9GT0xMT1dfU1VDQ0VTUyIsIkxPQURfRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19VU0VSX1JFUVVFU1QiLCJVTkZPTExPV19VU0VSX1NVQ0NFU1MiLCJVTkZPTExPV19VU0VSX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlzTG9hZGluZyIsImVycm9yIiwidXNlciIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLFVBQVEsRUFBRSxLQURNO0FBRWhCQyxNQUFJLEVBQUUsRUFGVTtBQUdoQkMsWUFBVSxFQUFFLEVBSEk7QUFJaEJDLFdBQVMsRUFBRSxFQUpLO0FBS2hCQyxZQUFVLEVBQUU7QUFMSSxDQUFsQjtBQVFPLElBQU1DLFlBQVksR0FBRztBQUMxQkMsWUFBVSxFQUFFLEtBRGM7QUFDUDtBQUNuQkMsYUFBVyxFQUFFLEtBRmE7QUFFTjtBQUNwQkMsYUFBVyxFQUFFLEtBSGE7QUFHTjtBQUNwQkMsa0JBQWdCLEVBQUUsRUFKUTtBQUlKO0FBQ3RCQyxVQUFRLEVBQUUsS0FMZ0I7QUFLVDtBQUNqQkMsYUFBVyxFQUFFLEtBTmE7QUFNTjtBQUNwQkMsbUJBQWlCLEVBQUUsRUFQTztBQU9IO0FBQ3ZCQyxJQUFFLEVBQUUsSUFSc0I7QUFTMUJDLGVBQWEsRUFBRSxFQVRXO0FBU1A7QUFDbkJDLGNBQVksRUFBRSxFQVZZO0FBVVI7QUFDbEJDLFVBQVEsRUFBRSxJQVhnQixDQVdWOztBQVhVLENBQXJCLEMsQ0FjUDtBQUNBOztBQUVPLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QixDLENBRVA7O0FBQ08sSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCLEMsQ0FFUDs7QUFDTyxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIsQyxDQUVQOztBQUNPLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDLENBRVA7O0FBQ08sSUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCLEMsQ0FFUDs7QUFDTyxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCLEMsQ0FFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwyRUFBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCckMsWUFBeUI7QUFBQSxNQUFYc0MsTUFBVzs7QUFDL0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS3hCLGNBQUw7QUFBcUI7QUFDbkIsK0NBQ0tzQixLQURMO0FBRUVsQyxxQkFBVyxFQUFFLElBRmYsQ0FHRTtBQUNBOztBQUpGO0FBTUQ7O0FBQ0QsU0FBS2EsY0FBTDtBQUFxQjtBQUNuQiwrQ0FDS3FCLEtBREw7QUFFRWxDLHFCQUFXLEVBQUUsS0FGZjtBQUdFRixvQkFBVSxFQUFFLElBSGQ7QUFJRU8sWUFBRSxFQUFFZCxTQUpOO0FBS0U4QyxtQkFBUyxFQUFFO0FBTGI7QUFPRDs7QUFDRCxTQUFLdkIsY0FBTDtBQUFxQjtBQUNuQiwrQ0FDS29CLEtBREw7QUFFRWxDLHFCQUFXLEVBQUUsS0FGZjtBQUdFRixvQkFBVSxFQUFFLEtBSGQ7QUFJRUcsMEJBQWdCLEVBQUVrQyxNQUFNLENBQUNHLEtBSjNCO0FBS0VqQyxZQUFFLEVBQUU7QUFMTjtBQU9EOztBQUNELFNBQUthLGVBQUw7QUFBc0I7QUFDcEIsK0NBQ0tnQixLQURMO0FBRUVwQyxvQkFBVSxFQUFFLEtBRmQ7QUFHRXlDLGNBQUksRUFBRTtBQUhSO0FBS0Q7O0FBQ0QsU0FBSzlCLGVBQUw7QUFBc0I7QUFDcEIsK0NBQ0t5QixLQURMO0FBRUV0QyxvQkFBVSxFQUFFdUMsTUFBTSxDQUFDSztBQUZyQjtBQUlEOztBQUNEO0FBQVM7QUFDUCxpQ0FDS04sS0FETDtBQUdEO0FBNUNIO0FBOENELENBL0NEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjMzNDk0ODgwZTE2YzYyMDQ0YWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDstIjquLDqsJIo7LaU7ZuEIGR1bW156rCS7J2EIOydtOyqveycvOuhnCDsmK7qsqjslbwg7ZWoKVxyXG5jb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXHJcbiAgUG9zdDogW10sXHJcbiAgRm9sbG93aW5nczogW10sXHJcbiAgRm9sbG93ZXJzOiBbXSxcclxuICBzaWduVXBEYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsIC8v66Gc6re47J24IOyXrOu2gFxyXG4gIGlzTG9nZ2VkT3V0OiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGxvZ0luRXJyb3JSZWFzb246IFwiXCIsIC8vIOuhnOq3uOyduCDsl5Drn6wg7IKs7JygXHJcbiAgc2lnbmVkVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7ISx6rO1XHJcbiAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgc2lnblVwRXJyb3JSZWFzb246IFwiXCIsIC8vIO2ajOybkOqwgOyehSDsi6TtjKgg7IKs7JygXHJcbiAgbWU6IG51bGwsXHJcbiAgZm9sbG93aW5nTGlzdDogW10sIC8v7YyU66Gc7J6JIOumrOyKpO2KuFxyXG4gIGZvbGxvd2VyTGlzdDogW10sIC8vIO2MlOuhnOyasCDrpqzsiqTtirhcclxuICB1c2VySW5mbzogbnVsbCwgLy/rgqjsnZgg7KCV67O0XHJcbn07XHJcblxyXG4vL2FjdGlvbuuqhSAtIOu5hOuPmeq4sCjshJzrsoTsqr0g7J2R64u17ZWE7JqU7ZWcKSAtIHJlcXVlc3Qsc3VjYyxmYWlsIDPqsJwsIOuPmeq4sOuKlCjshJzrsoTtlYTsmpRYKSAx6rCcXHJcbi8vIOyEnOuyhOyqvSDsnZHri7Ug7ZWE7JqU7ZWY64uk66m0IHJlZHV4IHNhZ2HquYzsp4AuLlxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG4vLyDroZzqt7jsnbgg7ZuEIOyCrOyaqeyekCDsoJXrs7Qg67aI65+s7Jik6riwXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuLy8g64uk66W47IKs656MIO2MlOuhnOyasFxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfUkVRVUVTVCA9IFwiRk9MTE9XX1VTRVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfU1VDQ0VTUyA9IFwiRk9MTE9XX1VTRVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfRkFJTFVSRSA9IFwiRk9MTE9XX1VTRVJfRkFJTFVSRVwiO1xyXG5cclxuLy8g7YyU66Gc7JqwLCDtjJTroZzsnokg7Lmc6rWs65OkIOu2iOufrOyYpOq4sFxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuLy8g64uk66W47IKs656MIOyWuO2MlOuhnOyasCDtlZjquLBcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1VTRVJfUkVRVUVTVCA9IFwiVU5GT0xMT1dfVVNFUl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1VTRVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfVVNFUl9GQUlMVVJFID0gXCJVTkZPTExPV19VU0VSX0ZBSUxVUkVcIjtcclxuXHJcbi8vIOuCtCDtjJTroZzsm4wg7KCc6rGw7ZWY6riwKOydtOyDge2VnCDsgqzrnowg7IKt7KCcKVxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gXCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xyXG5cclxuLy9hY3Rpb24g7KCV7J2YXHJcbi8vIGV4cG9ydCBjb25zdCBzaWduVXBBY3Rpb24gPSBkYXRhID0+IHtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4vLyAgICAgZGF0YSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHNpZ25VcFN1Y2Nlc3MgPSB7XHJcbi8vICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuLy8gICAgIGRhdGEsXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0ge1xyXG4vLyAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dJblN1Y2Nlc3MgPSB7XHJcbi8vICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbi8vIH07XHJcblxyXG4vLyDrj5nsoIHrjbDsnbTthLDripQg7ZWo7IiY66W8IO2Gte2VtCDrhKPslrTslbwg7ZWoXHJcbi8vICh7fSkg7J206rG0IOuwlOuhnCByZXR1cm7tlZjripQg6rKDIOyDneueteusuOuylVxyXG4vLyBleHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4gKHtcclxuLy8gICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbi8vICAgZGF0YTogZGF0YSxcclxuLy8gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcclxuICAgICAgICAvLyBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgLy8gbG9nSW5FcnJvclJlYXNvbjogXCJcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICBtZTogZHVtbXlVc2VyLFxyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIGxvZ0luRXJyb3JSZWFzb246IGFjdGlvbi5lcnJvcixcclxuICAgICAgICBtZTogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2lnblVwRGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9