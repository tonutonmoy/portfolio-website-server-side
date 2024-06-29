import { z } from "zod";

const experienceValidation = z.object({
  experienceDetails: z.string(),
  companyName: z.string(),
  duration: z.string(),
});

export const ExperienceValidation = {
  experienceValidation,
};
