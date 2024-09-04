import express from 'express';
import UserController from '../controller/user.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.post('/register',singleUpload, UserController.register);
router.post('/login', UserController.login);
router.post('/profile/update',isAuthenticated ,UserController.updateProfile);

export default router;