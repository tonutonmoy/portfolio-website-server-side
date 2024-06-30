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
const getSingleExperienceToDB = async (_id: string) => {
  const res = await experienceModel.findOne({ _id });

  const result = {
    experience: res,
  };

  return result;
};

const updateExperienceToDB = async (_id: string, data: any) => {
  const res = await experienceModel.updateOne({ _id }, data);

  const result = {
    experience: res,
  };

  return result;
};
const deleteExperienceToDB = async (_id: string) => {
  const res = await experienceModel.deleteOne({ _id });

  const result = {
    experience: res,
  };

  return result;
};

export const ExperienceServices = {
  createExperienceToDB,
  getExperienceToDB,
  updateExperienceToDB,
  deleteExperienceToDB,
  getSingleExperienceToDB,
};
