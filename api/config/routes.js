var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var jobsController = require('../controllers/jobs');

// http://127.0.0.1:3000/presidents
router.route('/jobs')

  //GET all presidents
  .get(jobsController.getAll)

  //POST a new blob
  .post(jobsController.createJob);


router.route('/jobs/:id')

  // GET return specific candy
  .get(jobsController.getJob)

  // PATCH update existing candy
  .patch(jobsController.updateJob)

  // DELETE remove specific candy from DB
  .delete(jobsController.removeJob);


module.exports = router;