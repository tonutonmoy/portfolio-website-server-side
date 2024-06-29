import { TBlog } from "./blogs.interface";
import blogsModel from "./blogs.model";

const createBlogToDB = async (data: TBlog) => {
  const res = await blogsModel.create(data);

  if (!res) {
    throw {
      success: false,
      statusCode: 400,
      message: "Create Experience failed",
    };
  }

  const result = {
    blog: {
      _id: res._id,
    },
  };

  return result;
};
const getBlogsToDB = async () => {
  const res = await blogsModel.find();

  const result = {
    blog: res,
  };

  return result;
};
const getSingleBlogToDB = async (_id: string) => {
  const res = await blogsModel.findOne({ _id });

  const result = {
    blog: res,
  };

  return result;
};

const updateBlogToDB = async (_id: string, data: any) => {
  const res = await blogsModel.updateOne({ _id }, data);

  const result = {
    blog: res,
  };

  return result;
};
const deleteBlogToDB = async (_id: string, data: any) => {
  const res = await blogsModel.deleteOne({ _id }, data);

  const result = {
    blog: res,
  };

  return result;
};

export const BlogServices = {
  createBlogToDB,
  updateBlogToDB,
  getSingleBlogToDB,
  getBlogsToDB,
  deleteBlogToDB,
};
