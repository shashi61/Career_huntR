import express from 'express'
import { updateUser } from '../controllers/authController.js'
const router = express.Router()

import { 
  createJob, deleteJob, getAllJobs, updateJob, showStats } 
from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs);
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteJob).patch(updateJob);


export default router;

