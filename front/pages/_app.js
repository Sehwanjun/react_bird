//next에서 제공하는 기능으로 해당 _app.js로 파일명을 가져가면
//폴더 내 모든파일이(index, profile 등) _app.js를 부모 컴포넌트로 사용함
import React from "react";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";
import Head from "next/head";
import reducer from "../reducers";
import { createWrapper } from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import withRedux from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

// const store = createStore(reducer); 빼고 {component, store } 이렇게 해야하나?
const NodeBird = ({ Component }) => {
  const store = createStore(reducer);
  return (
    // <provider>태그로 감싸면 라우터 작동안됨
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"
        />
        <script src="http://cdnjs.cloutflare.com/ajax/libs/antd/3.18.1/antd.js" />
      </Head>
      <AppLayout>
        {/* 다른 컴포넌트들을 의미 */}
        <Component></Component>
      </AppLayout>
    </>
  );
  NodeBird.propTypes = {
    // node: JSX에 들어갈 수 있는 모든 것들(문자열, 컴포넌트 등)
    // elementType: 컴포넌트 자체
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
  };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  // const enhancer = compose(
  //   applyMiddleware(...middlewares),
  //   !options.isServer &&
  //     typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
  //     ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //     : f => f
  // );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  // store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

// nodeBird에 스토어 삽입, 미들웨어 삽입(하단코드 고정)
export default withRedux(configureStore)(NodeBird);

//페이지들의 공통적인 부분을 모아놓음
//<Component/>는 자식컴포넌트에서 가져오는 것임(next기능)
