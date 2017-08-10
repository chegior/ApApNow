var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require ('cors');
var massive = require ('massive');
var cookieParser = require('cookie-Parser')

var session = require('express-session');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var gcal = require('google-calendar');
var port = 3000;
var app = module.exports = express();

var configAuth = require('./config/auth.js')

app.use(cookieParser());
//app.use(session({secret:'un secreto'}));
app.use(bodyParser.json());
//Passport code moved here for now...//
passport.serializeUser(function(user, done) {
      done(null, user);
  });

  // used to deserialize the user
  passport.deserializeUser(function(user, done) {
      done(null, user);
  });
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
//////////AUTHENTICATION FOR GOOGLE/////////////////////////////////
//////////AUTHENTICATION FOR GOOGLE/////////////////////////////////

passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
    //scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar']
  },
    function(accessToken, refreshToken, profile, done) {
      console.log('this is profile', profile)
      return done(null, profile)
    //  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //    return done(err, user);
    //  });
   }
));

//
// if(err){
//   return done(err);
// }
// if(user){
//   return done(null,user);
// }
// else{
//   console.log("HERE:" + user);
//     return (user);
// }


// app.get('/auth/google', passport.authenticate('google', { scope:'https://www.googleapis.com/auth/calendar'}));
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}));

app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/auth/google' }),
  function(req, res) {
    console.log("SUCCESFULL",req.user);
    res.redirect('/');
  });
//////////EOF AUTHENTICATION FOR GOOGLE/////////////////////////////////
//////////EOF AUTHENTICATION FOR GOOGLE/////////////////////////////////


var connectionString = 'postgres://postgres:1603chedro@localhost/AAN-db';
var dbCtrl = require ('./controllers/dbCtrl');

massive( connectionString ).then( dbInstance => {
  app.set('db', dbInstance);});



app.use(express.static('public'));



app.get('/api/customers',dbCtrl.getCustomers);


app.post('/api/newCustomer',dbCtrl.newCustomer);

app.post('/api/userAccess',dbCtrl.loginUser)



////////TESTING AREA//////////////////////////////////////////////

// app.get('/',function(req,res,next){
//
//   res.json('it is working');
// });



app.listen(port, function(){

  console.log('Running on PORT:', port);
})
