import express from "express";

import zodValidateRequest from "../../app/middlewares/zodValidateRequest";

import { ProjectsControllers } from "./projects.controller";
import { ProjectsValidation } from "./projects.validation";

const router = express.Router();

router.post(
  "/createProject",
  zodValidateRequest(ProjectsValidation.projectValidation),
  ProjectsControllers.createProject
);
router.get("/getProjects", ProjectsControllers.getProjects);
router.get("/getSingleProject/:id", ProjectsControllers.getSingleProject);
router.put("/updateSingleProject/:id", ProjectsControllers.updateProject);
router.delete("/deleteProject/:id", ProjectsControllers.deleteProject);

export const ProjectsRoutes = router;
