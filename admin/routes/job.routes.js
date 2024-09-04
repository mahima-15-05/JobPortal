import express from 'express';
import JobController from '../controller/job.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router = express.Router();

router.post('/post',isAuthenticated, JobController.postJob);
router.get('/get-all-job',isAuthenticated ,JobController.getAllJob);
router.get('/get-job-by-admin',isAuthenticated ,JobController.getJobCreatedByAdmin);
router.get('/get/:id',isAuthenticated ,JobController.getJobById);

// testing is left
export default router;