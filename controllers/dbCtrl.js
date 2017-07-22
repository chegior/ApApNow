module.exports = {
  getCustomers: function(req,res,next){
    var db = req.app.get('db');

    db.get_customers([req.query])
      .then(function(customers){
        res.json(customers);
      })
      .catch(function(err){
        res.send(err);
      })
    },
  newCustomer: function(req,res,next){
      var db = req.app.get('db');
      console.log('req.body', req.body);

      db.new_customer(
        [
          req.body.customer.firstName,
          req.body.customer.lastName,
          req.body.customer.email,
          req.body.customer.phone
        ])
        .then(db.new_user(
          [
            req.body.customer.email,
            req.body.customer.user,
            req.body.customer.pass
          ]
        ))
        .then(
        function (newCust){res.json(newCust)})
      .catch(function(err){res.send(err)})
  },
}
