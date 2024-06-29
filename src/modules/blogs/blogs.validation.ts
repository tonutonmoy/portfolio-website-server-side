import { z } from "zod";

const blogValidation = z.object({
  detail: z.string(),
  image: z.string(),
  title: z.string(),
});

export const BlogValidation = {
  blogValidation,
};
