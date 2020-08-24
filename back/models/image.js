module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      // 테이블 이름
      //스키마 정의
      src: {
        //S3저장
        type: DataTypes.STRING(200), // 이미지 경로
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
  Image.associate = db => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
