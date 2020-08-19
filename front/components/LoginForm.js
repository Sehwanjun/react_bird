import React, { useCallback } from "react";
import { Form, Button } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../pages/signup"; //Todo: util폴더로 옮기기
import { LOG_IN_REQUEST } from "../reducers/user";

const LoginForm = () => {
  // custom hook 재사용
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      // submit 클릭시 리덕스의 User.js의 dummyuser가 login 될 것
      dispatch({
        type: LOG_IN_REQUEST,
        data: {
          id,
          password,
        },
      });
    },
    [id, password]
  );
  // 로그인 폼(로그인 하기 전 형태)
  // 자식컴포넌트에 넘기는 함수는 무조건 useCallback으로 감싸준다!!!

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          name="user-password"
          type="text"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
