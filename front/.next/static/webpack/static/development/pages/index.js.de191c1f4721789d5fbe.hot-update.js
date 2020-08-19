webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\arthu\\Documents\\react-nodebird\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// 타임라인 역할 페이지




 // import { loginAction, logoutAction } from "../reducers/user";
// 추후 리덕스 file에 편입
// const dummy = {
//   isLoggedIn: true,
//   imagePaths: [],
//   mainPosts: [
//     {
//       User: {
//         id: 1,
//         nickname: "전세환",
//       },
//       content: "첫 번째 게시글",
//       img:
//         "https://m.post.naver.com/viewer/postView.nhn?volumeNo=27220260&memberNo=3613482#",
//     },
//   ],
// };

var Home = function Home() {
  _s();

  // const dispatch = useDispatch();
  // 처음 state는 전체state(reducers/index.js의 user)
  // 성능 최적화를 위해 잘게 쪼개서 useSelector 함
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn; // const user = useSelector(state => state.user.user);
  // const isLoggedIn = useSelector(state => state.user.isLoggedIn);


  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts; // console.log(user);
  // useEffect(() => {
  //   dispatch(loginAction);
  //   dispatch(logoutAction);
  //   dispatch(loginAction);
  // }, []);


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "LOAD_MAIN_POSTS_REQUEST"
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 22
    }
  }), mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: c,
      post: c,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 16
      }
    });
  }));
};

_s(Home, "2zlmdpOpa3jBgOqctxOxkmZXAcI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwicG9zdCIsIm1haW5Qb3N0cyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwibWFwIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakI7QUFDQTtBQUNBO0FBSGlCLHFCQUlNQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSmpCO0FBQUEsTUFJVEMsVUFKUyxnQkFJVEEsVUFKUyxFQUtqQjtBQUNBOzs7QUFOaUIsc0JBT0tILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FQaEI7QUFBQSxNQU9UQyxTQVBTLGlCQU9UQSxTQVBTLEVBUWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsWUFBUSxDQUFDO0FBQ1BHLFVBQUksRUFBRTtBQURDLEtBQUQsQ0FBUjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR04sVUFBVSxJQUFJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5qQixFQVFHRSxTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFBQyxDQUFDLEVBQUk7QUFDbEIsV0FBTyxNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxDQUFmO0FBQWtCLFVBQUksRUFBRUEsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FGQSxDQVJILENBREY7QUFjRCxDQWxDRDs7R0FBTVosSTtVQUltQkMsdUQsRUFHREEsdUQsRUFPTE8sdUQ7OztLQWRiUixJO0FBb0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZGUxOTFjMWY0NzIxNzg5ZDVmYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIO2DgOyehOudvOyduCDsl63tlaAg7Y6Y7J207KeAXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFNJR05fVVBfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbi8vIGltcG9ydCB7IGxvZ2luQWN0aW9uLCBsb2dvdXRBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuLy8g7LaU7ZuEIOumrOuNleyKpCBmaWxl7JeQIO2OuOyehVxyXG4vLyBjb25zdCBkdW1teSA9IHtcclxuLy8gICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4vLyAgIGltYWdlUGF0aHM6IFtdLFxyXG4vLyAgIG1haW5Qb3N0czogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6IFwi7KCE7IS47ZmYXCIsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIBcIixcclxuLy8gICAgICAgaW1nOlxyXG4vLyAgICAgICAgIFwiaHR0cHM6Ly9tLnBvc3QubmF2ZXIuY29tL3ZpZXdlci9wb3N0Vmlldy5uaG4/dm9sdW1lTm89MjcyMjAyNjAmbWVtYmVyTm89MzYxMzQ4MiNcIixcclxuLy8gICAgIH0sXHJcbi8vICAgXSxcclxuLy8gfTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIC8vIOyymOydjCBzdGF0ZeuKlCDsoITssrRzdGF0ZShyZWR1Y2Vycy9pbmRleC5qc+ydmCB1c2VyKVxyXG4gIC8vIOyEseuKpSDstZzsoIHtmZTrpbwg7JyE7ZW0IOyemOqyjCDsqrzqsJzshJwgdXNlU2VsZWN0b3Ig7ZWoXHJcbiAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICAvLyBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci51c2VyKTtcclxuICAvLyBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5pc0xvZ2dlZEluKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcbiAgLy8gY29uc29sZS5sb2codXNlcik7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKGxvZ2luQWN0aW9uKTtcclxuICAvLyAgIGRpc3BhdGNoKGxvZ291dEFjdGlvbik7XHJcbiAgLy8gICBkaXNwYXRjaChsb2dpbkFjdGlvbik7XHJcbiAgLy8gfSwgW10pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkxPQURfTUFJTl9QT1NUU19SRVFVRVNUXCIsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiB7dXNlciA/IChcclxuICAgICAgICA8ZGl2PuuhnOq3uOyduCDtlojsirXri4jri6Q6IHt1c2VyLm5pY2tuYW1lfTwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+66Gc6re47JWE7JuDIO2WiOyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgKX0gKi99XHJcbiAgICAgIHtpc0xvZ2dlZEluICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgey8qIOqyjOyLnOq4gCDrgpjsmKTripQg6rO16rCEICovfVxyXG4gICAgICB7bWFpblBvc3RzLm1hcChjID0+IHtcclxuICAgICAgICByZXR1cm4gPFBvc3RDYXJkIGtleT17Y30gcG9zdD17Y30gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=