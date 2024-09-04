import express from "express";
import ApplicationController from "../controller/application.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.get('/apply/:id',isAuthenticated,ApplicationController.applyJob);
router.get('/get',isAuthenticated,ApplicationController.getAppliedJobs);
router.get('/:id/applicants',isAuthenticated,ApplicationController.getApplicants);
router.post('/status/:id/update',isAuthenticated,ApplicationController.updateStatus);
export default router;