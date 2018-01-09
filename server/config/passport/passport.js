var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, dogowner) {
  var DogOwner = dogowner;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },

    function(req, email, password, done) {

      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      DogOwner.findOne({
        where: {
          email: email
        }
      }).then(function(dogowner) {
        if(dogowner){
          return done(null, false, {
            message: 'That email is already taken'
          });
        } else {
          var userPassword = generateHash(password);
          var data = {
            email: email,
            password: dogownerPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            city: req.body.city,
            postcode: req.body.postcode,
          };
          DogOwner.create(data).then(function(newDogOwner, created) {
            if(!newDogOwner) {
              return done(null, false);
            }
            if(newDogOwner) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));
}
