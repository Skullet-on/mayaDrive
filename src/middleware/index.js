const strategy = (req, res, next) => {
    const user = {name: 'Chuvak'};
    console.log('asd');
    if (req.body.email === 'eugene@gmail.com') return next(null, user);
    
    return next (null, false);
}

/*const checkAccess = (role) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json('Unauthorized')

    делай свои валидационные дела
     
    return res.status(401).json(`Unauthorized`)
  }
}*/



module.exports = {
	strategy
};
