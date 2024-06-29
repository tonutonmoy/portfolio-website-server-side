import { Schema, model } from "mongoose";
import { TProjects } from "./projects.interface";

const projectsSchema = new Schema<TProjects>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    details: { type: String, required: true },
    client: { type: String, required: true },
    server: { type: String, required: true },
    live: { type: String, required: true },

    technology: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

const projectsModel = model<TProjects>("Projects", projectsSchema);

export default projectsModel;
