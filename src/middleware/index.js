const { ExtractJwt, Strategy } = require('passport-jwt');
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
}

const strategy = new Strategy(jwtOptions, (jwt_payload, next) => {
  const user = jwt_payload;

  if (user.email === 'eugene@gmail.com') return next(null, user);
  console.log(user);
  return next(null, false);
});

module.exports = {
  strategy
};
