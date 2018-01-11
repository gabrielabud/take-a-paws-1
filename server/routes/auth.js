const authController = require('../controllers/authcontroller.js');

module.exports = (app, passport) => {

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/error'
  }));

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/error'
  }));

  app.get('/logout',authController.logout);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
  }
};
