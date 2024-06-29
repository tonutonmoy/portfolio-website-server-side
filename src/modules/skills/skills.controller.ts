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

export const SkillsControllers = {
  createSkills,
  getSkills,
};
