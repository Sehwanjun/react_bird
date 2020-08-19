import React from "react";
import Link from "next/link";
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from "antd";
import PropTypes from "prop-types";
import Password from "antd/lib/input/Password";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

// 아직 서버쪽에서 불러오는 데이터가 없어서 dummy에다가 가짜데이터를 만들어 주는 것
// const dummy = {
//   nickname: "제로초",
//   Post: [],
//   Followings: [],
//   Followers: [],
//   isLoggedIn: false,
// };

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.user);
  return (
    <div>
      {/* 상단 메뉴 antd 적용 */}
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>

        {/* 검색창 */}
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>

      {/* xs는 제일 작은화면, md는 데스크탑, 전체는 24이다 */}
      {/* 자동으로 반응형이 된다 */}

      {/* antd > grid system */}
      {/* 전체가 24, 그 후에 배분 */}
      <Row gutter={8}>
        {/* 로그인 창 */}
        <Col xs={24} md={6}>
          {/* 일단 로그인 했을때와 안했을때의 모습 둘다 만들어 놓은 다음에 if문 */}
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* 외부경로는 Link 태그를 사용할 수 없음 <Link href="https://www.facebook.com"> */}
          <a href="https://www.facebook.com" target="_blank">
            Mady by Sehwan
          </a>
          {/* </Link> */}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.elementType,
};

export default AppLayout;
