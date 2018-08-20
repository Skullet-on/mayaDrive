const { ExtractJwt, Strategy } = require('passport-jwt');
const {findUserByEmail} = require('../helpers/users');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
}

const strategy = new Strategy(jwtOptions, (jwt_payload, next) => {
  const user = jwt_payload;

	findUserByEmail(user.email)
	  .then(user => {
	     if (!user) return res.status(401).json(`Unauthorized`)
	     
	    return next(null, user)
	  }).catch(err => res.status(500).json(`Server error`))
});

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) return next();
  return res.status(403).json(`Forbidden`)
}


module.exports = {
  strategy,
  isAdmin
};
