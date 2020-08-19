webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\arthu\\Documents\\react-nodebird\\front\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//next에서 제공하는 기능으로 해당 _app.js로 파일명을 가져가면
//폴더 내 모든파일이(index, profile 등) _app.js를 부모 컴포넌트로 사용함










 // const store = createStore(reducer); 빼고 {component, store } 이렇게 해야하나?

var NodeBird = function NodeBird(_ref) {
  var Component = _ref.Component;
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return (// <provider>태그로 감싸면 라우터 작동안됨
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, "NodeBird"), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "http://cdnjs.cloutflare.com/ajax/libs/antd/3.18.1/antd.js",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    })), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx(Component, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    })))
  );
  NodeBird.propTypes = {
    // node: JSX에 들어갈 수 있는 모든 것들(문자열, 컴포넌트 등)
    // elementType: 컴포넌트 자체
    Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,
    store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
  };
};

_c = NodeBird;

var configureStore = function configureStore(initialState, options) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var middlewares = [sagaMiddleware];
  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_7__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"].apply(void 0, middlewares)); // const enhancer = compose(
  //   applyMiddleware(...middlewares),
  //   !options.isServer &&
  //     typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
  //     ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //     : f => f
  // );

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, enhancer);
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_9__["default"]); // store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}; // nodeBird에 스토어 삽입, 미들웨어 삽입(하단코드 고정)


/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(configureStore)(NodeBird)); //페이지들의 공통적인 부분을 모아놓음
//<Component/>는 자식컴포넌트에서 가져오는 것임(next기능)
// import { applyMiddleware, createStore, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { createWrapper } from "next-redux-wrapper";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "../reducers";
// import rootSaga from "../sagas";
// const configureStore = context => {
//   console.log(context);
//   const sagaMiddleware = createSagaMiddleware();
//   const middlewares = [sagaMiddleware];
//   const enhancer =
//     process.env.NODE_ENV === "production"
//       ? compose(applyMiddleware(...middlewares))
//       : composeWithDevTools(applyMiddleware(...middlewares));
//   const store = createStore(reducer, enhancer);
//   store.sagaTask = sagaMiddleware.run(rootSaga);
//   return store;
// };
// export default wrapper;

var _c;

$RefreshReg$(_c, "NodeBird");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50Iiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIm9wdGlvbnMiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwicm9vdFNhZ2EiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ2xDLE1BQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsQ0FBekI7QUFDQSxTQUNFO0FBQ0EsdUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQ0UsU0FBRyxFQUFDLFlBRE47QUFFRSxVQUFJLEVBQUMsNkRBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBTUU7QUFBUSxTQUFHLEVBQUMsMkRBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLENBREYsRUFTRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBVEY7QUFGRjtBQWlCQUosVUFBUSxDQUFDSyxTQUFULEdBQXFCO0FBQ25CO0FBQ0E7QUFDQUosYUFBUyxFQUFFSyxpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQUhkO0FBSW5CTixTQUFLLEVBQUVJLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJEO0FBSkwsR0FBckI7QUFNRCxDQXpCRDs7S0FBTVIsUTs7QUEyQk4sSUFBTVUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxZQUFELEVBQWVDLE9BQWYsRUFBMkI7QUFDaEQsTUFBTUMsY0FBYyxHQUFHQywwREFBb0IsRUFBM0M7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxDQUFwQjtBQUNBLE1BQU1HLFFBQVEsR0FDWixRQUNJQyxTQURKLEdBRUlDLG9GQUFtQixDQUFDQyxxREFBZSxNQUFmLFNBQW1CSixXQUFuQixDQUFELENBSHpCLENBSGdELENBT2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1iLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBVU8sWUFBVixFQUF3QkssUUFBeEIsQ0FBekI7QUFDQUgsZ0JBQWMsQ0FBQ08sR0FBZixDQUFtQkMsOENBQW5CLEVBZmdELENBZ0JoRDs7QUFDQSxTQUFPbkIsS0FBUDtBQUNELENBbEJELEMsQ0FvQkE7OztBQUNlb0IsaUlBQVMsQ0FBQ1osY0FBRCxDQUFULENBQTBCVixRQUExQixDQUFmLEUsQ0FFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZTViMTIxMmM2ZThkYmU3NjZjYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vbmV4dOyXkOyEnCDsoJzqs7XtlZjripQg6riw64ql7Jy866GcIO2VtOuLuSBfYXBwLmpz66GcIO2MjOydvOuqheydhCDqsIDsoLjqsIDrqbRcclxuLy/tj7TrjZQg64K0IOuqqOuToO2MjOydvOydtChpbmRleCwgcHJvZmlsZSDrk7EpIF9hcHAuanPrpbwg67aA66qoIOy7tO2PrOuEjO2KuOuhnCDsgqzsmqntlahcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG4vLyBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpOyDrubzqs6Age2NvbXBvbmVudCwgc3RvcmUgfSDsnbTroIfqsowg7ZW07JW87ZWY64KYP1xyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gPHByb3ZpZGVyPu2DnOq3uOuhnCDqsJDsi7jrqbQg65287Jqw7YSwIOyekeuPmeyViOuQqFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE4LjEvYW50ZC5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwOi8vY2RuanMuY2xvdXRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4xOC4xL2FudGQuanNcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgey8qIOuLpOuluCDsu7Ttj6zrhIztirjrk6TsnYQg7J2Y66+4ICovfVxyXG4gICAgICAgIDxDb21wb25lbnQ+PC9Db21wb25lbnQ+XHJcbiAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxuICBOb2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvLyBub2RlOiBKU1jsl5Ag65Ok7Ja06rCIIOyImCDsnojripQg66qo65OgIOqyg+uTpCjrrLjsnpDsl7QsIOy7tO2PrOuEjO2KuCDrk7EpXHJcbiAgICAvLyBlbGVtZW50VHlwZTog7Lu07Y+s64SM7Yq4IOyekOyytFxyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICAgIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZSwgb3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgLy8gY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlKFxyXG4gIC8vICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSxcclxuICAvLyAgICFvcHRpb25zLmlzU2VydmVyICYmXHJcbiAgLy8gICAgIHR5cGVvZiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gIC8vICAgICA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcclxuICAvLyAgICAgOiBmID0+IGZcclxuICAvLyApO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XHJcbiAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAvLyBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuLy8gbm9kZUJpcmTsl5Ag7Iqk7Yag7Ja0IOyCveyehSwg66+465Ok7Juo7Ja0IOyCveyehSjtlZjri6jsvZTrk5wg6rOg7KCVKVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUpKE5vZGVCaXJkKTtcclxuXHJcbi8v7Y6Y7J207KeA65Ok7J2YIOqzte2GteyggeyduCDrtoDrtoTsnYQg66qo7JWE64aT7J2MXHJcbi8vPENvbXBvbmVudC8+64qUIOyekOyLney7tO2PrOuEjO2KuOyXkOyEnCDqsIDsoLjsmKTripQg6rKD7J6EKG5leHTquLDriqUpXHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuLy8gaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbi8vIGltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcblxyXG4vLyBpbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuLy8gaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuLy8gY29uc3QgY29uZmlndXJlU3RvcmUgPSBjb250ZXh0ID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuLy8gICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbi8vICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4vLyAgIGNvbnN0IGVuaGFuY2VyID1cclxuLy8gICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4vLyAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuLy8gICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4vLyAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4vLyAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuLy8gICByZXR1cm4gc3RvcmU7XHJcbi8vIH07XHJcblxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==