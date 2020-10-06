const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      const exUser = await User.find({ where: { email } });
      if (result) {
        done(null, exUser);
      } else {
        done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};