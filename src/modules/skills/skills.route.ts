import express from "express";

import zodValidateRequest from "../../app/middlewares/zodValidateRequest";

import { SkillsControllers } from "./skills.controller";
import { SkillsValidation } from "./skills.validation";

const router = express.Router();

router.post(
  "/createSkill",
  zodValidateRequest(SkillsValidation.skillValidation),
  SkillsControllers.createSkills
);
router.get("/getSkills", SkillsControllers.getSkills);

export const SkillsRoutes = router;
