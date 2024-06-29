import config from "../../app/config";
import { TUser } from "./user.interface";
import UserModel from "./user.model";
import jwt, { JwtPayload } from "jsonwebtoken";

const registerUserToDB = async (data: TUser) => {
  const res = await UserModel.create(data);

  if (!res) {
    throw {
      success: false,
      statusCode: 400,
      message: "Registration failed",
    };
  }
  const payload = {
    _id: res?._id,
    email: res?.email,
    name: res?.name,
    role: res?.role,
  };

  const token = jwt.sign(payload, config.jwt_secret as string, {
    expiresIn: "30d",
  });

  const result = {
    user: {
      _id: res._id,
      username: res?.name,
      email: res?.email,
    },
    token,
  };

  return result;
};
const loginUserToDB = async (data: TUser) => {
  console.log(data);
  const res = await UserModel.findOne({ email: data?.email });
  console.log(res);

  if (!res) {
    throw {
      success: false,
      statusCode: 400,
      errorMessage: "User not exist!",
    };
  }

  const payload = {
    _id: res._id,
    email: res?.email,
    username: res?.name,
  };

  const token = jwt.sign(payload, config.jwt_secret as string, {
    expiresIn: "30d",
  });

  const result = {
    user: {
      _id: res._id,
      username: res?.name,
      email: res?.email,
      role: res?.role,
    },
    token,
  };

  console.log(token, "token ready");

  return result;
};

export const UserServices = {
  registerUserToDB,
  loginUserToDB,
};
