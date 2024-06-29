import catchAsync from "../../app/utils/catchAsync";
import { ExperienceServices } from "./experience.services";

const createExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.createExperienceToDB(req?.body);

  res.send({
    statusCode: 201,
    success: true,

    message: "Create Experience successfully",
    data: result,
  });
});

const getExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceServices.getExperienceToDB();

  res.send({
    statusCode: 200,
    success: true,

    message: "Get Experience successful",
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req?.params;
  const data = req?.body;
  const result = await ExperienceServices.updateExperienceToDB(id, data);

  res.send({
    statusCode: 203,
    success: true,

    message: "Update Experience successful",
    data: result,
  });
});

export const ExperienceControllers = {
  createExperience,
  getExperiences,
  updateExperience,
};
