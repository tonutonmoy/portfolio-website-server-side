import express from "express";

import zodValidateRequest from "../../app/middlewares/zodValidateRequest";

import { BlogsControllers } from "./blogs.controller";
import { BlogValidation } from "./blogs.validation";

const router = express.Router();

router.post(
  "/createBlog",
  zodValidateRequest(BlogValidation.blogValidation),
  BlogsControllers.createBlog
);
router.get("/getBlogs", BlogsControllers.getBlogs);
router.get("/getSingleBlog/:id", BlogsControllers.getSingleBlog);

router.put("/updateSingleBlog/:id", BlogsControllers.updateBlog);
router.put("/deleteSingleBlog/:id", BlogsControllers.deleteBlog);

export const BlogsRoutes = router;
