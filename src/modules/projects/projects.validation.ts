import { z } from "zod";

const projectValidation = z.object({
  image: z.string(),
  name: z.string(),
  details: z.string(),
  client: z.string(),
  server: z.string(),
  live: z.string(),

  technology: z.array(z.string()),
});

export const ProjectsValidation = {
  projectValidation,
};
