const express = require("express");
const db = require("./models");
const app = express();

// front에서 /에 요청 보내면 보내는 방식
// 메인페이지 접속하면 hello,server를 보낸다.(get은 새로고침 등 포함)
app.get("/", (req, res) => {
  res.send("hello, server");
});

app.get("/about", (req, res) => {
  res.send("hello, about");
});
// 알아서 테이블 들어짐
db.sequelize.sync();
// 8080 서버의 주소(로컬호스트 서버)
app.listen(3600, () => {
  console.log("server is running on http://localhost:3600");
});
