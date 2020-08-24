module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post", // 테이블명은 posts로 바뀜
    {
      // 테이블 이름
      //스키마 정의
      content: {
        //column 이름
        type: DataTypes.TEXT, // cf. 매우 긴 글
        allowNull: false, // null 허용 설정(false: 필수값)
      },
    },
    {
      // 테이블 옵션
      charset: "utf8mb4", // 한글 + 이모티콘까지
      collate: "utf8mb4_general_ci",
    }
  );

  //다른 DB와의 관계정의 (Post, hashtag 등)
  Post.associate = db => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //이건 post끼리의 관계
    db.Post.belongsTo(db.Hashtag, { through: "PostHashtag" });
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // 다대다 관계
  };
  return Post;
};
