var Job = require('../models/Job');

// GET
function getAll(request, response) {
  Job.find(function(error, jobs) {
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

function updateJob(request, response) {
  var id = request.params.id;

  Job.findById({_id: id}, function(error, job) {
    if(error) response.json({message: 'Could not find job b/c:' + error});

    if(request.body.name) job.name = request.body.name;
    if(request.body.start) job.start = request.body.start;
    if(request.body.end) job.end = request.body.end;

    job.save(function(error) {
      if(error) response.json({messsage: 'Could not update job b/c:' + error});

      response.json({message: 'Job successfully updated', job: job});
    });
  });
}

function removeJob(request, response) {
  var id = request.params.id;

  Job.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete job b/c:' + error});

    response.json({message: 'Job successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createJob: createJob,
  getJob: getJob,
  updateJob: updateJob,
  removeJob: removeJob
};