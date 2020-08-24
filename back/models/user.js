module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", // 대문자로 만들었음 테이블명은 users(첫글자 소문자, 복수형(s)로 바뀜)
    {
      // 테이블 이름
      //스키마 정의
      nickname: {
        //column 이름
        type: DataTypes.STRING(20), // 데이터 타입 설정(20자 이하)
        allowNull: false, // null 허용 설정(false: 필수값)
      },
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true, //고유한 값
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      // 테이블 옵션
      charset: "utf8",
      collate: "utf8_general_ci", // 두줄을 통해 한글 저장가능
    }
  );

  //다른 DB와의 관계정의 (Post, hashtag 등)
  User.associate = db => {
    //아래 user->post와 구분짓기위해 as Post
    //그리고 나중에 데이터 가져올때 as의 이름으로 가져옴
    db.User.hasMany(db.Post, { as: "Post" });
    db.User.hasMany(db.Comment);
    // 다대다일 경우 as를 갖다놓는게 좋다
    db.User.belongsToMany(db.Post, {
      through: "Like",
      as: "Liked",
    }); // 다대다 관계
    // User끼리 쌍방이면 줄 복사 후 한줄은 as:Follower
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
    });
  };

  return User;
};

// const user = {
//   id: 1,
//   nickname: "zerocho",
//   Liked: [{ 게시글1 }, { 게시글2 }, { 게시글3 }],
//   Posts: [{ 게시글1 }, { 게시글2 }, { 게시글3 }],
//   Followers: [{ 사용자1 }, { 사용자2 }, { 사용자3 }],
// };
