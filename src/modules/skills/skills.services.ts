import { TSkills } from "./skills.interface";
import SkillsModel from "./skills.model";

const createSkillsToDB = async (data: TSkills) => {
  const res = await SkillsModel.create(data);

  if (!res) {
    throw {
      success: false,
      statusCode: 400,
      message: "Create Skills failed",
    };
  }

  const result = {
    skills: {
      _id: res._id,
    },
  };

  return result;
};
const getSkillsToDB = async () => {
  const res = await SkillsModel.find();

  const result = {
    skills: res,
  };

  return result;
};

export const SkillsServices = {
  createSkillsToDB,
  getSkillsToDB,
};
