import catchAsync from "../../app/utils/catchAsync";
import { BlogServices } from "./blogs.services";

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogToDB(req?.body);

  res.send({
    statusCode: 201,
    success: true,

    message: "Create Blog successfully",
    data: result,
  });
});

const getBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getBlogsToDB();

  res.send({
    statusCode: 200,
    success: true,

    message: "Get Blogs successful",
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req?.params;

  const result = await BlogServices.getSingleBlogToDB(id);

  res.send({
    statusCode: 202,
    success: true,

    message: "Get single Blog successful",
    data: result,
  });
});
const updateBlog = catchAsync(async (req, res) => {
  const { id } = req?.params;
  const data = req?.body;
  const result = await BlogServices.updateBlogToDB(id, data);

  res.send({
    statusCode: 203,
    success: true,

    message: "Update Blog successful",
    data: result,
  });
});
const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req?.params;
  const data = req?.body;
  const result = await BlogServices.deleteBlogToDB(id, data);

  res.send({
    statusCode: 204,
    success: true,

    message: "Delete Blog successful",
    data: result,
  });
});

export const BlogsControllers = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
