import { Schema, model } from "mongoose";
import { TExperience } from "./experience.interface";

const experienceSchema = new Schema<TExperience>({
  experienceDetails: {
    type: String,
    required: true,
  },
  companyName: { type: String, required: true },
  duration: { type: String, required: true },
});

const experienceModel = model<TExperience>("Experience", experienceSchema);

export default experienceModel;
