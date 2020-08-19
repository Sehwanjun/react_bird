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
      type: LOAD_POSTS_REQUEST
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 22
    }
  }), mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: c,
      post: c,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwicG9zdCIsIm1haW5Qb3N0cyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwibWFwIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7Q0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakI7QUFDQTtBQUNBO0FBSGlCLHFCQUlNQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSmpCO0FBQUEsTUFJVEMsVUFKUyxnQkFJVEEsVUFKUyxFQUtqQjtBQUNBOzs7QUFOaUIsc0JBT0tILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FQaEI7QUFBQSxNQU9UQyxTQVBTLGlCQU9UQSxTQVBTLEVBUWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsWUFBUSxDQUFDO0FBQ1BHLFVBQUksRUFBRUM7QUFEQyxLQUFELENBQVI7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdQLFVBQVUsSUFBSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOakIsRUFRR0UsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQUMsQ0FBQyxFQUFJO0FBQ2xCLFdBQU8sTUFBQyw0REFBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBZjtBQUFrQixVQUFJLEVBQUVBLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBRkEsQ0FSSCxDQURGO0FBY0QsQ0FwQ0Q7O0dBQU1iLEk7VUFJbUJDLHVELEVBR0RBLHVELEVBT0xPLHVEOzs7S0FkYlIsSTtBQXNDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmU5N2VjMDJiYzdmOWNlZjEyN2M3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDtg4DsnoTrnbzsnbgg7Jet7ZWgIO2OmOydtOyngFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyBpbXBvcnQgeyBsb2dpbkFjdGlvbiwgbG9nb3V0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbi8vIOy2lO2bhCDrpqzrjZXsiqQgZmlsZeyXkCDtjrjsnoVcclxuLy8gY29uc3QgZHVtbXkgPSB7XHJcbi8vICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICBpbWFnZVBhdGhzOiBbXSxcclxuLy8gICBtYWluUG9zdHM6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiBcIuyghOyEuO2ZmFwiLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAXCIsXHJcbi8vICAgICAgIGltZzpcclxuLy8gICAgICAgICBcImh0dHBzOi8vbS5wb3N0Lm5hdmVyLmNvbS92aWV3ZXIvcG9zdFZpZXcubmhuP3ZvbHVtZU5vPTI3MjIwMjYwJm1lbWJlck5vPTM2MTM0ODIjXCIsXHJcbi8vICAgICB9LFxyXG4vLyAgIF0sXHJcbi8vIH07XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAvLyDsspjsnYwgc3RhdGXripQg7KCE7LK0c3RhdGUocmVkdWNlcnMvaW5kZXguanPsnZggdXNlcilcclxuICAvLyDshLHriqUg7LWc7KCB7ZmU66W8IOychO2VtCDsnpjqsowg7Kq86rCc7IScIHVzZVNlbGVjdG9yIO2VqFxyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgLy8gY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIudXNlcik7XHJcbiAgLy8gY29uc3QgaXNMb2dnZWRJbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIuaXNMb2dnZWRJbik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChsb2dpbkFjdGlvbik7XHJcbiAgLy8gICBkaXNwYXRjaChsb2dvdXRBY3Rpb24pO1xyXG4gIC8vICAgZGlzcGF0Y2gobG9naW5BY3Rpb24pO1xyXG4gIC8vIH0sIFtdKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiB7dXNlciA/IChcclxuICAgICAgICA8ZGl2PuuhnOq3uOyduCDtlojsirXri4jri6Q6IHt1c2VyLm5pY2tuYW1lfTwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+66Gc6re47JWE7JuDIO2WiOyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgKX0gKi99XHJcbiAgICAgIHtpc0xvZ2dlZEluICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgey8qIOqyjOyLnOq4gCDrgpjsmKTripQg6rO16rCEICovfVxyXG4gICAgICB7bWFpblBvc3RzLm1hcChjID0+IHtcclxuICAgICAgICByZXR1cm4gPFBvc3RDYXJkIGtleT17Y30gcG9zdD17Y30gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=