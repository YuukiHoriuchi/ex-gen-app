'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "名前は必ず入力して下さい。"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "パスワードは必ず入力下さい。"
        }
      }
    },
    mail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "メールアドレスを入力下さい。"
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: { msg: "整数を入力下さい。"},
        min: {
          args: [0],
          msg: "ゼロ以上の値が必要です。"
        }
      }
    }
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};