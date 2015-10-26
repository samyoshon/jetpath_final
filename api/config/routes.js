var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var jobsController = require('../controllers/jobs');

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


module.exports = router;