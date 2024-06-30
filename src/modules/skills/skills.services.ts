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
const getSingleSkillsToDB = async (_id: string) => {
  const res = await SkillsModel.findOne({ _id });

  const result = {
    skills: res,
  };

  return result;
};
const updateSkillsToDB = async (_id: string, data: any) => {
  const res = await SkillsModel.updateOne({ _id }, data);

  const result = {
    skills: res,
  };

  return result;
};
const deleteSkillsToDB = async (_id: string) => {
  const res = await SkillsModel.deleteOne({ _id });

  const result = {
    skills: res,
  };

  return result;
};

export const SkillsServices = {
  createSkillsToDB,
  getSkillsToDB,
  getSingleSkillsToDB,
  updateSkillsToDB,
  deleteSkillsToDB,
};
