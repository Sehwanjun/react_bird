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
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__["createWrapper"])(configureStore, {
  debug: true
}); // nodeBird에 스토어 삽입, 미들웨어 삽입(하단코드 고정)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50Iiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIm9wdGlvbnMiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNsQyxNQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELENBQXpCO0FBQ0EsU0FDRTtBQUNBLHVFQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUNFLFNBQUcsRUFBQyxZQUROO0FBRUUsVUFBSSxFQUFDLDZEQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQU1FO0FBQVEsU0FBRyxFQUFDLDJEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixDQURGLEVBU0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQVRGO0FBRkY7QUFpQkFKLFVBQVEsQ0FBQ0ssU0FBVCxHQUFxQjtBQUNuQjtBQUNBO0FBQ0FKLGFBQVMsRUFBRUssaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFIZDtBQUluQk4sU0FBSyxFQUFFSSxpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUpMLEdBQXJCO0FBTUQsQ0F6QkQ7O0tBQU1SLFE7O0FBMkJOLElBQU1VLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsWUFBRCxFQUFlQyxPQUFmLEVBQTJCO0FBQ2hELE1BQU1DLGNBQWMsR0FBR0MsMERBQW9CLEVBQTNDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsQ0FBcEI7QUFDQSxNQUFNRyxRQUFRLEdBQ1osUUFDSUMsU0FESixHQUVJQyxvRkFBbUIsQ0FBQ0MscURBQWUsTUFBZixTQUFtQkosV0FBbkIsQ0FBRCxDQUh6QixDQUhnRCxDQU9oRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNYixLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQVVPLFlBQVYsRUFBd0JLLFFBQXhCLENBQXpCO0FBQ0FILGdCQUFjLENBQUNPLEdBQWYsQ0FBbUJDLDhDQUFuQixFQWZnRCxDQWdCaEQ7O0FBQ0EsU0FBT25CLEtBQVA7QUFDRCxDQWxCRDs7QUFvQkEsSUFBTW9CLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ2IsY0FBRCxFQUFpQjtBQUM1Q2MsT0FBSztBQUR1QyxDQUFqQixDQUE3QixDLENBSUE7O0FBQ2VDLGlJQUFTLENBQUNmLGNBQUQsQ0FBVCxDQUEwQlYsUUFBMUIsQ0FBZixFLENBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmU4OWU1OWYwODNhMjJiNDVlYTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL25leHTsl5DshJwg7KCc6rO17ZWY64qUIOq4sOuKpeycvOuhnCDtlbTri7kgX2FwcC5qc+uhnCDtjIzsnbzrqoXsnYQg6rCA7KC46rCA66m0XHJcbi8v7Y+0642UIOuCtCDrqqjrk6DtjIzsnbzsnbQoaW5kZXgsIHByb2ZpbGUg65OxKSBfYXBwLmpz66W8IOu2gOuqqCDsu7Ttj6zrhIztirjroZwg7IKs7Jqp7ZWoXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuLy8gY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTsg67m86rOgIHtjb21wb25lbnQsIHN0b3JlIH0g7J2066CH6rKMIO2VtOyVvO2VmOuCmD9cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxwcm92aWRlcj7tg5zqt7jroZwg6rCQ7Iu466m0IOudvOyasO2EsCDsnpHrj5nslYjrkKhcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4xOC4xL2FudGQuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cDovL2NkbmpzLmNsb3V0ZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuMTguMS9hbnRkLmpzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIHsvKiDri6Trpbgg7Lu07Y+s64SM7Yq465Ok7J2EIOydmOuvuCAqL31cclxuICAgICAgICA8Q29tcG9uZW50PjwvQ29tcG9uZW50PlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gICAgLy8gbm9kZTogSlNY7JeQIOuTpOyWtOqwiCDsiJgg7J6I64qUIOuqqOuToCDqsoPrk6Qo66y47J6Q7Je0LCDsu7Ttj6zrhIztirgg65OxKVxyXG4gICAgLy8gZWxlbWVudFR5cGU6IOy7tO2PrOuEjO2KuCDsnpDssrRcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUsIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIC8vIGNvbnN0IGVuaGFuY2VyID0gY29tcG9zZShcclxuICAvLyAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyksXHJcbiAgLy8gICAhb3B0aW9ucy5pc1NlcnZlciAmJlxyXG4gIC8vICAgICB0eXBlb2Ygd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gIT09IFwidW5kZWZpbmVkXCJcclxuICAvLyAgICAgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbiAgLy8gICAgIDogZiA9PiBmXHJcbiAgLy8gKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xyXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgLy8gc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuLy8gbm9kZUJpcmTsl5Ag7Iqk7Yag7Ja0IOyCveyehSwg66+465Ok7Juo7Ja0IOyCveyehSjtlZjri6jsvZTrk5wg6rOg7KCVKVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUpKE5vZGVCaXJkKTtcclxuXHJcbi8v7Y6Y7J207KeA65Ok7J2YIOqzte2GteyggeyduCDrtoDrtoTsnYQg66qo7JWE64aT7J2MXHJcbi8vPENvbXBvbmVudC8+64qUIOyekOyLney7tO2PrOuEjO2KuOyXkOyEnCDqsIDsoLjsmKTripQg6rKD7J6EKG5leHTquLDriqUpXHJcblxyXG4vLyBpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbi8vIGltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5cclxuLy8gaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcclxuXHJcbi8vIGNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gY29udGV4dCA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coY29udGV4dCk7XHJcbi8vICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4vLyAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuLy8gICBjb25zdCBlbmhhbmNlciA9XHJcbi8vICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuLy8gICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbi8vICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuLy8gICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuLy8gICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbi8vICAgcmV0dXJuIHN0b3JlO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==