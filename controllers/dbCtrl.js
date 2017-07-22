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
      const db = req.app.get('db');

      db.new_customer(
        [
          req.body.customer.firstName,
          req.body.customer.lastName,
          req.body.customer.email,
          req.body.customer.phone
        ])
        .then((response, err) => {
          if (err) throw(err)
          let customerId = response[0].id
          db.new_user(
          [
            customerId,
            req.body.customer.user,
            req.body.customer.pass
          ]
        )})
        .then(function(newCust) {
          res.json(newCust)
        })
        .catch(function(err){res.send(err)})
  },
  loginUser: function(req,res,next){
    var db = req.app.get('db');
    console.log("connected to the DB");

    db.login_user([
      req.body.user.username,
      req.body.user.password
    ]).then (
      function(userLog){res.json(userLog)})
      .catch(
        function(err){res.send(err)}
      )



  }
}
