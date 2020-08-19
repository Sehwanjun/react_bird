import React from "react";
import { Form, Button, List, Card, Icon } from "antd";
import NicknameEditForm from "../components/NicknameEditForm";

const dummyUser = {
  name: "제로초",
};

const Profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <List
        style={{ margineBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로잉 목록</div>}
        loadMore={<Button style={{ width: "100%" }}>더 보기</Button>}
        bordered
        dataSource={["제로초", "바보", "노드배드오피셜"]}
        renderItem={item => (
          <List.Item style={{ marginTop: "20px" }}>
            {/* []배열내에 JSX 넣을 시 KEY 반드시 삽입 */}
            <Card actions={[<Icon key="stop" type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      ></List>
      <List
        style={{ margineBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로워 목록</div>}
        loadMore={<Button style={{ width: "100%" }}>더 보기</Button>}
        bordered
        dataSource={["제로초", "바보", "노드배드오피셜"]}
        renderItem={item => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<Icon key="stop" type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default Profile;
