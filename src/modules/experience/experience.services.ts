import { TExperience } from "./experience.interface";
import experienceModel from "./experience.model";

const createExperienceToDB = async (data: TExperience) => {
  const res = await experienceModel.create(data);

  if (!res) {
    throw {
      success: false,
      statusCode: 400,
      message: "Create Experience failed",
    };
  }

  const result = {
    experience: {
      _id: res._id,
    },
  };

  return result;
};
const getExperienceToDB = async () => {
  const res = await experienceModel.find();

  const result = {
    experience: res,
  };

  return result;
};

const updateExperienceToDB = async (id: string, data: any) => {
  const res = await experienceModel.updateOne({ id }, data);

  const result = {
    experience: res,
  };

  return result;
};

export const ExperienceServices = {
  createExperienceToDB,
  getExperienceToDB,
  updateExperienceToDB,
};
