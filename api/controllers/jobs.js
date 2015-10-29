var Job = require('../models/Job');
var User = require('../models/User');

// GET
function getAll(request, response) {
  Job.find({}).exec(function(error, jobs) {
    if(error) response.json({message: 'Could not find any job'});

    response.json({jobs: jobs});
  });
}

// POST
function createJob(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var job = new Job(request.body);

  job.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate job b/c:' + error});

    response.json({job: job});
  });
}

// GET
function getJob(request, response) {
  var id = request.params.id;

  Job.findById({_id: id}, function(error, job) {
    if(error) response.json({message: 'Could not find job b/c:' + error});

    response.json({job: job});
  });
}

function updateJob(req, res) {
  var id = req.params.id;

  Job.findById({_id: id}, function(error, job) {
    if(error) res.json({message: 'Could not find job b/c:' + error});

    // if(request.body.name) job.name = request.body.name;
    // if(request.body.start) job.start = request.body.start;
    // if(request.body.end) job.end = request.body.end;

    job.save(function(error) {
      if(error) res.json({messsage: 'Could not update job b/c:' + error});

      res.json({message: 'Job successfully updated', job: job});
    });
  });
}

function removeJob(req, res) {
  var id = req.params.id;

  Job.remove({_id: id}, function(error) {
    if(error) res.json({message: 'Could not delete job b/c:' + error});

    res.json({message: 'Job successfully deleted'});
  });
}

function addApplicant(req, res) {
  if (req.body.user && req.body){
    User.findOne({email: req.body.user.email}).then(function(user){
      Job.findByIdAndUpdate(req.body.job._id, {$set: {'applicants': user._id}},
        {safe: true, upsert: true, new : true},
        function(err, job) {
            console.log(job);
            res.json({job: job});
        }
      );
    });
  }
  else {
    console.log('User must be logged in!');
  }
}

module.exports = {
  getAll: getAll,
  createJob: createJob,
  getJob: getJob,
  updateJob: updateJob,
  removeJob: removeJob,
  addApplicant: addApplicant
};