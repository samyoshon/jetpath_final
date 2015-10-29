var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var jobsController = require('../controllers/jobs');
var usersController = require('../controllers/users');

router.route('/jobs')

  //GET all jobs
  .get(jobsController.getAll)

  //POST a new job
  .post(jobsController.createJob);


router.route('/jobs/:id')

  // GET return specific job
  .get(jobsController.getJob)

  // PATCH update existing job
  .patch(jobsController.updateJob)

  // DELETE remove specific job from DB
  .delete(jobsController.removeJob);

router.route('/users')

  //GET all users
  .get(usersController.getAll);

router.route('/users/:id')

  // GET return specific user
  .get(usersController.getUser)

  // PATCH update existing user
  .patch(usersController.updateUser)

  // DELETE remove specific user from DB
  .delete(usersController.removeUser);

router.route('/register')

  .post(usersController.registerUser);

router.route('/login')

  // .get(usersController.loginUser)

  .post(usersController.loginUser);

router.route('/apply/:id')

  .post(jobsController.addApplicant);

module.exports = router;