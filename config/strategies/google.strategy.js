
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var passport = require('passport');
var configAuth = require('../auth.js')

module.exports = function(){
            passport.use(new GoogleStrategy({
            clientID: configAuth.googleAuth.clientID,
            clientSecret: configAuth.googleAuth.clientSecret,
            callbackURL: configAuth.googleAuth.callbackURL,},

            function(req,accessToken, refreshToken, profile, done) {
                //var user = profile.displayName;
                //console.log(user);  
            return done(null, profile)

   }
));


}