import express from "express";

import { UserControllers } from "./user.controllers";
import zodValidateRequest from "../../app/middlewares/zodValidateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/registration",
  zodValidateRequest(UserValidation.userRegisterValidation),
  UserControllers.registerUser
);
router.post(
  "/login",
  zodValidateRequest(UserValidation.userLoginValidation),
  UserControllers.loginUser
);

export const UserRoutes = router;
