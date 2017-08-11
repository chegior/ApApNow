var passport = require('passport');


module.exports= function(app){
    app.use(passport.initialize());
    app.use(passport.session({
        cookieName: 'session',
        secret: 'eg[isfd-8yF9-7w231{}+Ijsli;;to8',
        duration: 30 * 60 * 1000,
        activeDuration: 5 * 60 * 1000,
        httpOnly: true,
        secure: true,
        ephemeral: true
    }));

passport.serializeUser(function(user, done) {
      done(null, user);
  });

  // used to deserialize the user
passport.deserializeUser(function(user, done) {
      done(null, user);
  });
  require('./strategies/google.strategy')();


}