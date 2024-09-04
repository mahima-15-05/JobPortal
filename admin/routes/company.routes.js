import express from "express";
import CompanyController from "../controller/compay.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/register",isAuthenticated, CompanyController.registerCompany);
router.get("/get", isAuthenticated, CompanyController.getCompany);
router.get(
  "/get/:id",
  isAuthenticated,
  CompanyController.getCompanyById
);
router.post("/update/:id",isAuthenticated,CompanyController.updateCompany)
export default router;
