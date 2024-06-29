import { z } from "zod";

const skillValidation = z.object({
  image: z.string(),
  name: z.string(),
});

export const SkillsValidation = {
  skillValidation,
};
