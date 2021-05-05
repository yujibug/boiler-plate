const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //space를 없애줌
    unique: 1, //유니크한값만 받아올수있게 설정
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0, //role을 주지 않았을 경우 기본 0으로 설정
  },
  image: String,
  token: {
    type: String, //token으로 유효성검사
  },
  tokenExp: {
    type: Number, //token의 유효기간
  },
});

const User = mongoose.model('User', userSchema); //모델은 스키마를 감싼다

module.exports = { User };
