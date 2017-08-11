var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require ('cors');
var massive = require ('massive');
var cookieParser = require('cookie-Parser')
var passport = require('passport');
var session = require('express-session');
var port = 3000;
var app = module.exports = express();
app.use(cookieParser());
app.use(bodyParser.json());

require('./config/passport')(app);


app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'https://www.googleapis.com/auth/calendar']}));

app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/auth/google' }),
  function(req, res) {
    
    console.log("SUCCESFULL Name from API",req.user.displayName);
    res.redirect('/');
  });


var connectionString = 'postgres://postgres:1603chedro@localhost/AAN-db';
var dbCtrl = require ('./controllers/dbCtrl');

massive( connectionString )
.then( dbInstance => 
  {app.set('db', dbInstance);});


app.use(express.static('public'));

app.use('/', function(req,res,next){
  if(!req.user){//prevent to go any to slash routes
    res.redirect('/');
  }next();
});

app.get('/userG',function(req,res){
  console.log("YOU ARE IN THE USER", res.profile.email);
});

app.get('/api/customers',dbCtrl.getCustomers);
app.post('/api/newCustomer',dbCtrl.newCustomer);
app.post('/api/userAccess',dbCtrl.loginUser)

app.listen(port, function(){

  console.log('Running on PORT:', port);
})
