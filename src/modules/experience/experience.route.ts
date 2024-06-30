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
router.get(
  "/getSingleExperience/:id",
  ExperienceControllers.getSingleExperiences
);

router.put(
  "/updateSingleExperience/:id",
  ExperienceControllers.updateExperience
);
router.delete("/deleteExperience/:id", ExperienceControllers.deleteExperience);

export const ExperienceRoutes = router;
