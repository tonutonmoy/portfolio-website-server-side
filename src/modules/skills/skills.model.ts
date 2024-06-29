import { Schema, model } from "mongoose";
import { TSkills } from "./skills.interface";

const skillsSchema = new Schema<TSkills>(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const SkillsModel = model<TSkills>("Skills", skillsSchema);

export default SkillsModel;
