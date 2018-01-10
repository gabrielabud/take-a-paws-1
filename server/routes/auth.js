const authController = require('../controllers/authcontroller.js');

module.exports = (app, passport) => {

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: 'https://localhost:3000/'
  }));

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: 'http://www.bbc.co.uk/',
    failureRedirect: 'https://www.nationalgeographic.com/'
  }));

  app.get('/logout',authController.logout);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
  }
};
