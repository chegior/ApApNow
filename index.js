var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require ('cors');
var massive = require ('massive');

var connectionString = 'postgres://postgres:1603chedro@localhost/AAN-db';
var dbCtrl = require ('./controllers/dbCtrl');

massive( connectionString ).then( dbInstance => {
  app.set('db', dbInstance);});

var port = 3000;
var app = module.exports = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/api/customers',dbCtrl.getCustomers);


app.post('/api/newCustomer',dbCtrl.newCustomer);



////////TESTING AREA//////////////////////////////////////////////

// app.get('/',function(req,res,next){
//
//   res.json('it is working');
// });



app.listen(port, function(){

  console.log('Running on PORT:', port);
})
