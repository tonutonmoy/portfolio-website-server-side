import projectsModel from "./project.model";
import { TProjects } from "./projects.interface";

const createProjectToDB = async (data: TProjects) => {
  const res = await projectsModel.create(data);

  if (!res) {
    throw {
      success: false,
      statusCode: 400,
      message: "Create Projects failed",
    };
  }

  const result = {
    projects: {
      _id: res._id,
    },
  };

  return result;
};
const getProjectsToDB = async () => {
  const res = await projectsModel.find();

  const result = {
    projects: res,
  };

  return result;
};
const getSingleProjectToDB = async (_id: string) => {
  const res = await projectsModel.findOne({ _id });

  const result = {
    project: res,
  };

  return result;
};
const updateProjectToDB = async (_id: string, data: any) => {
  const res = await projectsModel.updateOne({ _id }, data);

  const result = {
    project: res,
  };

  return result;
};
const deleteProjectToDB = async (_id: string) => {
  const res = await projectsModel.deleteOne({ _id });

  const result = {
    project: res,
  };

  return result;
};

export const ProjectsServices = {
  createProjectToDB,
  getProjectsToDB,
  getSingleProjectToDB,
  updateProjectToDB,
  deleteProjectToDB,
};
