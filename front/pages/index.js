// 타임라인 역할 페이지

import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";
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

const Home = () => {
  // const dispatch = useDispatch();
  // 처음 state는 전체state(reducers/index.js의 user)
  // 성능 최적화를 위해 잘게 쪼개서 useSelector 함
  const { isLoggedIn } = useSelector(state => state.user);
  // const user = useSelector(state => state.user.user);
  // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const { mainPosts } = useSelector(state => state.post);
  // console.log(user);
  // useEffect(() => {
  //   dispatch(loginAction);
  //   dispatch(logoutAction);
  //   dispatch(loginAction);
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "LOAD_MAIN_POSTS_REQUEST",
    });
  }, []);
  return (
    <div>
      {/* {user ? (
        <div>로그인 했습니다: {user.nickname}</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )} */}
      {isLoggedIn && <PostForm />}
      {/* 게시글 나오는 공간 */}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
