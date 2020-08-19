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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50Iiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsIm9wdGlvbnMiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwicm9vdFNhZ2EiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ2xDLE1BQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsQ0FBekI7QUFDQSxTQUNFO0FBQ0EsdUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQ0UsU0FBRyxFQUFDLFlBRE47QUFFRSxVQUFJLEVBQUMsNkRBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBTUU7QUFBUSxTQUFHLEVBQUMsMkRBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLENBREYsRUFTRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBVEY7QUFGRjtBQWlCQUosVUFBUSxDQUFDSyxTQUFULEdBQXFCO0FBQ25CO0FBQ0E7QUFDQUosYUFBUyxFQUFFSyxpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQUhkO0FBSW5CTixTQUFLLEVBQUVJLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJEO0FBSkwsR0FBckI7QUFNRCxDQXpCRDs7S0FBTVIsUTs7QUEyQk4sSUFBTVUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxZQUFELEVBQWVDLE9BQWYsRUFBMkI7QUFDaEQsTUFBTUMsY0FBYyxHQUFHQywwREFBb0IsRUFBM0M7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxDQUFwQjtBQUNBLE1BQU1HLFFBQVEsR0FDWixRQUNJQyxTQURKLEdBRUlDLG9GQUFtQixDQUFDQyxxREFBZSxNQUFmLFNBQW1CSixXQUFuQixDQUFELENBSHpCLENBSGdELENBT2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1iLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBVU8sWUFBVixFQUF3QkssUUFBeEIsQ0FBekI7QUFDQUgsZ0JBQWMsQ0FBQ08sR0FBZixDQUFtQkMsOENBQW5CLEVBZmdELENBZ0JoRDs7QUFDQSxTQUFPbkIsS0FBUDtBQUNELENBbEJELEMsQ0FvQkE7OztBQUNlb0IsaUlBQVMsQ0FBQ1osY0FBRCxDQUFULENBQTBCVixRQUExQixDQUFmLEUsQ0FFQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmM3MjE2MWY4OTY3NzkzMmRhOTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL25leHTsl5DshJwg7KCc6rO17ZWY64qUIOq4sOuKpeycvOuhnCDtlbTri7kgX2FwcC5qc+uhnCDtjIzsnbzrqoXsnYQg6rCA7KC46rCA66m0XHJcbi8v7Y+0642UIOuCtCDrqqjrk6DtjIzsnbzsnbQoaW5kZXgsIHByb2ZpbGUg65OxKSBfYXBwLmpz66W8IOu2gOuqqCDsu7Ttj6zrhIztirjroZwg7IKs7Jqp7ZWoXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuLy8gY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTsg67m86rOgIHtjb21wb25lbnQsIHN0b3JlIH0g7J2066CH6rKMIO2VtOyVvO2VmOuCmD9cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxwcm92aWRlcj7tg5zqt7jroZwg6rCQ7Iu466m0IOudvOyasO2EsCDsnpHrj5nslYjrkKhcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4xOC4xL2FudGQuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cDovL2NkbmpzLmNsb3V0ZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuMTguMS9hbnRkLmpzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIHsvKiDri6Trpbgg7Lu07Y+s64SM7Yq465Ok7J2EIOydmOuvuCAqL31cclxuICAgICAgICA8Q29tcG9uZW50PjwvQ29tcG9uZW50PlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gICAgLy8gbm9kZTogSlNY7JeQIOuTpOyWtOqwiCDsiJgg7J6I64qUIOuqqOuToCDqsoPrk6Qo66y47J6Q7Je0LCDsu7Ttj6zrhIztirgg65OxKVxyXG4gICAgLy8gZWxlbWVudFR5cGU6IOy7tO2PrOuEjO2KuCDsnpDssrRcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUsIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIC8vIGNvbnN0IGVuaGFuY2VyID0gY29tcG9zZShcclxuICAvLyAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyksXHJcbiAgLy8gICAhb3B0aW9ucy5pc1NlcnZlciAmJlxyXG4gIC8vICAgICB0eXBlb2Ygd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gIT09IFwidW5kZWZpbmVkXCJcclxuICAvLyAgICAgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbiAgLy8gICAgIDogZiA9PiBmXHJcbiAgLy8gKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xyXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgLy8gc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbi8vIG5vZGVCaXJk7JeQIOyKpO2GoOyWtCDsgr3snoUsIOuvuOuTpOybqOyWtCDsgr3snoUo7ZWY64uo7L2U65OcIOqzoOyglSlcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNvbmZpZ3VyZVN0b3JlKShOb2RlQmlyZCk7XHJcblxyXG4vL+2OmOydtOyngOuTpOydmCDqs7XthrXsoIHsnbgg67aA67aE7J2EIOuqqOyVhOuGk+ydjFxyXG4vLzxDb21wb25lbnQvPuuKlCDsnpDsi53su7Ttj6zrhIztirjsl5DshJwg6rCA7KC47Jik64qUIOqyg+yehChuZXh06riw64qlKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9