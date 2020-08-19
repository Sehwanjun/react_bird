export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "전세환",
      },
      content: "첫 번째 게시글",
      img:
        "https://m.post.naver.com/viewer/postView.nhn?volumeNo=27220260&memberNo=3613482#",
    },
  ], // 화면에 보일 포스트들
  imagePaths: [], // 미리보기 이미지 경로
  addPostErrorReason: false, // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
};

//메인포스트 로딩액션
export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

//해쉬태그 검색결과 로딩액션
export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

//사용자 검색결과 로딩액션
export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

//이미지 업로딩액션
export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

//이미지 제거액션
export const REMOVE_IMAGE = "REMOVE_IMAGE";

const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";

//포스트에 like 누르는 액션
export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

//포스트에 like 취소하는 액션
export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

//포스트에 댓글 남기는 액션
export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

//포스트에 댓글 불러오는 액션
export const LOAD_COMMENT_REQUEST = "LOAD_COMMENT_REQUEST";
export const LOAD_COMMENT_SUCCESS = "LOAD_COMMENT_SUCCESS";
export const LOAD_COMMENT_FAILURE = "LOAD_COMMENT_FAILURE";

//RETWEET 액션
export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

//POST 제거하는 액션
export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

//POST 수정하는 액션 필요

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
