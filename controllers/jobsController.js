import mongoose from 'mongoose'

const createJob =  async (req, res) => { 
  res.send ('create job')
}

const deleteJob =  async (req, res) => { 
  res.send ('delete job')
}

const getAllJobs =  async (req, res) => { 
  res.send ('get all jobs')
}

const updateJob =  async (req, res) => { 
  res.send ('update job')
}

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ])

  res.status(StatusCodes.OK).json({ stats })
}


export { createJob, deleteJob, getAllJobs, updateJob, showStats }