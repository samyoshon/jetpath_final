var User = require('../models/User');
var Job = require('../models/Job');

// GET
function getAll(request, response) {
  User.find({}).exec(function(error, users) {
    if(error) response.json({message: 'Could not find any user'});

    response.json({users: users});
  });
}

// GET
function getUser(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    response.json({user: user});
  });
}

function updateUser(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    // if(request.body.name) user.name = request.body.name;
    // if(request.body.start) user.start = request.body.start;
    // if(request.body.end) user.end = request.body.end;

    user.save(function(error) {
      if(error) response.json({messsage: 'Could not update user b/c:' + error});

      response.json({message: 'User successfully updated', user: user});
    });
  });
}

function removeUser(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete user b/c:' + error});

    response.json({message: 'User successfully deleted'});
  });
}

function registerUser(req, res) {
  var user = new User({email: req.body.email, password: req.body.password});

  user.save(function() {
        req.session.email = user.email;
  });
}

function loginUser(req, res) {
  User.findOne({email: req.body.email})
    .then(function(user) {
       user.comparePasswordAsync(req.body.password).then(function(isMatch) {
          req.session.email = user.email;
          console.log('login success: ' + req.session.email);
          res.json({user: user});
       });
    });
}

module.exports = {
  getAll: getAll,
  getUser: getUser,
  updateUser: updateUser,
  removeUser: removeUser,
  registerUser: registerUser,
  loginUser: loginUser
};