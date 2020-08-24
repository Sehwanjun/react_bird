module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      // 테이블 이름
      //스키마 정의
      content: {
        type: DataTypes.TEXT,
        allowNull: false, // null 허용 설정(false: 필수값)
      },
    },
    {
      // 테이블 옵션
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  //다른 DB와의 관계정의 (Post, hashtag 등)
  Comment.associate = db => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
