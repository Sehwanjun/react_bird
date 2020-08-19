import React, { useState, useCallback, memo } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch } from "react-redux";
import UserProfile from "../components/UserProfile";
import ActionButton from "antd/lib/modal/ActionButton";

// custom hooks
// export 해놓으면 다른 컴포넌트(파일)에서도 쓸 수가 있음(AppLayout.js)
export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  // const [id, setId] = useState("");
  // const [nickName, setNickname] = useState("");
  // const [password, setPassword] = useState("");
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [term, setTerm] = useState(false);
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const dispatch = useDispatch();
  // event listener

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      //폼 작성 상황에 따른 에러처리(검증 로직)
      // [password, passwordCheck, term] --> dependancy 배열에 넣어줌(해당사항들 변경될 때 이벤트리스너가 새로 생성됨)
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      // User.js의 signUpData: Action.data로 데이터가 들어감
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { id, password, nickname },
      });
    },
    [password, passwordCheck, term]
  );
  // const onChangeId = e => {          << custom hook으로 줄인 내용
  //   setId(e.target.value);
  // };
  // const onChangeNickname = e => {
  //   setNickname(e.target.value);
  // };
  // const onChangePassword = e => {
  //   setPassword(e.target.value);
  // };

  const onChangePasswordCheck = useCallback(
    e => {
      // 글자 입력시 비번 같은지 확인
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      {/* style={{}} 추후 css 별도적용 필요 */}
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          {/* 앞에 required는 필수값 입력 */}
          <Input name="user-id" value={id} required onChange={onChangeId} />
          {/* 인풋 -> value, onChange 짝이 되어야 함 */}
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            value={passwordCheck}
            type="password"
            required
            onChange={onChangePasswordCheck}
          />
          {/* 비밀번호가 일치하지 않는(password error)의 경우 */}

          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" vale={term} onChange={onChangeTerm}>
            이용약관 내용에 동의합니다.
          </Checkbox>
          {/* 약관동의하지 않는(term error)의 경우 */}
          {termError && (
            <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          {/* 원래 button type="submit" antd의 특성 */}
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
        회원가입
      </Form>
    </>
  );
};

export default Signup;
