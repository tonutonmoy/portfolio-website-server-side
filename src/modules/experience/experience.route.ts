import express from "express";

import zodValidateRequest from "../../app/middlewares/zodValidateRequest";

import { ExperienceControllers } from "./experience.controller";
import { ExperienceValidation } from "./experience.validation";

const router = express.Router();

router.post(
  "/createExperience",
  zodValidateRequest(ExperienceValidation.experienceValidation),
  ExperienceControllers.createExperience
);
router.get("/getExperience", ExperienceControllers.getExperiences);

router.put(
  "/updateSingleExperience/:id",
  ExperienceControllers.updateExperience
);

export const ExperienceRoutes = router;
