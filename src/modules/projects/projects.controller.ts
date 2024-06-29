import catchAsync from "../../app/utils/catchAsync";
import { ProjectsServices } from "./project.services";

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectsServices.createProjectToDB(req?.body);

  res.send({
    statusCode: 201,
    success: true,

    message: "Create Project successfully",
    data: result,
  });
});

const getProjects = catchAsync(async (req, res) => {
  const result = await ProjectsServices.getProjectsToDB();

  res.send({
    statusCode: 200,
    success: true,

    message: "Get Projects successful",
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req?.params;
  const result = await ProjectsServices.getSingleProjectToDB(id);

  res.send({
    statusCode: 200,
    success: true,

    message: "Get Single Projects successful",
    data: result,
  });
});
const updateProject = catchAsync(async (req, res) => {
  const { id } = req?.params;
  const data = req?.body;

  const result = await ProjectsServices.updateProjectToDB(id, data);

  res.send({
    statusCode: 203,
    success: true,

    message: "Update Project successful",
    data: result,
  });
});
const deleteProject = catchAsync(async (req, res) => {
  const { id } = req?.params;
  console.log(id, "id");

  const result = await ProjectsServices.deleteProjectToDB(id);

  res.send({
    statusCode: 204,
    success: true,

    message: "Delete Project successful",
    data: result,
  });
});

export const ProjectsControllers = {
  createProject,
  getProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
