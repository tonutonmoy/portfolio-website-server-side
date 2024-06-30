import catchAsync from "../../app/utils/catchAsync";
import { SkillsServices } from "./skills.services";

const createSkills = catchAsync(async (req, res) => {
  const result = await SkillsServices.createSkillsToDB(req?.body);

  res.send({
    statusCode: 201,
    success: true,

    message: "Create Skills successfully",
    data: result,
  });
});

const getSkills = catchAsync(async (req, res) => {
  const result = await SkillsServices.getSkillsToDB();

  res.send({
    statusCode: 200,
    success: true,

    message: "Get Skills successful",
    data: result,
  });
});
const getSingleSkills = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const result = await SkillsServices.getSingleSkillsToDB(id);

  res.send({
    statusCode: 201,
    success: true,

    message: "Get Single Skills successful",
    data: result,
  });
});
const updateSkills = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const data = req?.body;

  const result = await SkillsServices.updateSkillsToDB(id, data);

  res.send({
    statusCode: 203,
    success: true,

    message: "Update Single Skills successful",
    data: result,
  });
});
const deleteSkills = catchAsync(async (req, res) => {
  const id = req?.params?.id;

  const result = await SkillsServices.deleteSkillsToDB(id);

  res.send({
    statusCode: 204,
    success: true,

    message: "Delete Single Skills successful",
    data: result,
  });
});

export const SkillsControllers = {
  createSkills,
  getSkills,
  getSingleSkills,
  updateSkills,
  deleteSkills,
};
