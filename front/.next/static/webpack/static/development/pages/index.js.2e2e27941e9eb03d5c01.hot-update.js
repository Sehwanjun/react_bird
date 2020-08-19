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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
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

/***/ }),

/***/ "./reducers/user.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwicG9zdCIsIm1haW5Qb3N0cyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwibWFwIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakI7QUFDQTtBQUNBO0FBSGlCLHFCQUlNQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSmpCO0FBQUEsTUFJVEMsVUFKUyxnQkFJVEEsVUFKUyxFQUtqQjtBQUNBOzs7QUFOaUIsc0JBT0tILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FQaEI7QUFBQSxNQU9UQyxTQVBTLGlCQU9UQSxTQVBTLEVBUWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsWUFBUSxDQUFDO0FBQ1BHLFVBQUksRUFBRTtBQURDLEtBQUQsQ0FBUjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR04sVUFBVSxJQUFJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5qQixFQVFHRSxTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFBQyxDQUFDLEVBQUk7QUFDbEIsV0FBTyxNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxDQUFmO0FBQWtCLFVBQUksRUFBRUEsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FGQSxDQVJILENBREY7QUFjRCxDQWxDRDs7R0FBTVosSTtVQUltQkMsdUQsRUFHREEsdUQsRUFPTE8sdUQ7OztLQWRiUixJO0FBb0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMmUyZTI3OTQxZTllYjAzZDVjMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIO2DgOyehOudvOyduCDsl63tlaAg7Y6Y7J207KeAXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExPQURfTUFJTl9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuLy8gaW1wb3J0IHsgbG9naW5BY3Rpb24sIGxvZ291dEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLyDstpTtm4Qg66as642V7IqkIGZpbGXsl5Ag7Y647J6FXHJcbi8vIGNvbnN0IGR1bW15ID0ge1xyXG4vLyAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbi8vICAgaW1hZ2VQYXRoczogW10sXHJcbi8vICAgbWFpblBvc3RzOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogXCLsoITshLjtmZhcIixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gFwiLFxyXG4vLyAgICAgICBpbWc6XHJcbi8vICAgICAgICAgXCJodHRwczovL20ucG9zdC5uYXZlci5jb20vdmlld2VyL3Bvc3RWaWV3Lm5obj92b2x1bWVObz0yNzIyMDI2MCZtZW1iZXJObz0zNjEzNDgyI1wiLFxyXG4vLyAgICAgfSxcclxuLy8gICBdLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgLy8g7LKY7J2MIHN0YXRl64qUIOyghOyytHN0YXRlKHJlZHVjZXJzL2luZGV4Lmpz7J2YIHVzZXIpXHJcbiAgLy8g7ISx64qlIOy1nOygge2ZlOulvCDsnITtlbQg7J6Y6rKMIOyqvOqwnOyEnCB1c2VTZWxlY3RvciDtlahcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gIC8vIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLnVzZXIpO1xyXG4gIC8vIGNvbnN0IGlzTG9nZ2VkSW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4pO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcclxuICAvLyBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2gobG9naW5BY3Rpb24pO1xyXG4gIC8vICAgZGlzcGF0Y2gobG9nb3V0QWN0aW9uKTtcclxuICAvLyAgIGRpc3BhdGNoKGxvZ2luQWN0aW9uKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1RcIixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIHt1c2VyID8gKFxyXG4gICAgICAgIDxkaXY+66Gc6re47J24IO2WiOyKteuLiOuLpDoge3VzZXIubmlja25hbWV9PC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj7roZzqt7jslYTsm4Mg7ZaI7Iq164uI64ukLjwvZGl2PlxyXG4gICAgICApfSAqL31cclxuICAgICAge2lzTG9nZ2VkSW4gJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7Lyog6rKM7Iuc6riAIOuCmOyYpOuKlCDqs7XqsIQgKi99XHJcbiAgICAgIHttYWluUG9zdHMubWFwKGMgPT4ge1xyXG4gICAgICAgIHJldHVybiA8UG9zdENhcmQga2V5PXtjfSBwb3N0PXtjfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==