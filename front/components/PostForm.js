import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector } from "react-redux";
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

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post);
  return (
    <Form style={{ margin: "10px 0 20px" }} encType="multipart/form-data">
      <Input.TextArea
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      ></Input.TextArea>
      <div>
        <Input type="file" multiple hidden></Input>
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          글 등록
        </Button>
      </div>
      {/* 이미지 미리보기 */}
      <div>
        {imagePaths.map(v => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
