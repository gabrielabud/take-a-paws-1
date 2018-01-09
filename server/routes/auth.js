module.exports = function(app, passport) {
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/'
  }));
};
