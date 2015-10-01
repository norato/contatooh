var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {
  
  var Usuario = mongoose.model('Usuario');

  passport.use(new GitHubStrategy({
    clientID: '2bee921a668e169c305b',
    clientSecret: '846586af5baf85ab45ffd8c5e6761d3966637dfa',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }, function(accessToken, refreshToken, profile, done) {
    
    Usuario.findOrCreate(
      { "login" : profile.username}, 
      { "nome" : profile.username},  
      function(erro, usuario) {
        if(erro) {
          return done(erro);
        } 
        return done(null, usuario);
      }
    );
  }));

  passport.serializeUser(function(usuario, done) {
    done(null, usuario._id);
  });

  passport.deserializeUser(function(id, done) {
    Usuario.findById(id).exec()
    .then(function(usuario) {
      done(null, usuario);  
    });
  });
};