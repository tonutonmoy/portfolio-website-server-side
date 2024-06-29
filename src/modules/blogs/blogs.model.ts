import { Schema, model } from "mongoose";

import { TBlog } from "./blogs.interface";

const blogSchema = new Schema<TBlog>(
  {
    image: {
      type: String,
      required: true,
    },
    detail: { type: String, required: true },
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const blogsModel = model<TBlog>("Blog", blogSchema);

export default blogsModel;
