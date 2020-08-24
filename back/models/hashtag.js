module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      // 테이블 이름
      //스키마 정의
      name: {
        type: DataTypes.STRING(20),
        allowNull: false, // null 허용 설정(false: 필수값)
      },
    },
    {
      // 테이블 옵션
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  //다른 DB와의 관계정의 (Post, hashtag 등)
  Hashtag.associate = db => {
    //다대다 관계(n:n) - 서로간의 관계를 정의하는 테이블 생성(PoshHashtag)
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
  };
  return Hashtag;
};
