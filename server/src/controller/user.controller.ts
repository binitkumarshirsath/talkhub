import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { Response } from "express";
import jwt from "jsonwebtoken";
import { ENV_CONFIG } from "../config/env-config.js";
import { CustomError } from "../utils/custom-error.js";

const signUp = async (req, res: Response) => {
  const { firstName, lastName, userName, password, profileImage } = req.body;

  if (!firstName || !lastName || !userName || !password) {
    throw new CustomError("Empty fields found", 204);
  }

  const userNameExists = await User.findOne({ userName });
  if (userNameExists)
    throw new CustomError(
      "Username already exists , try something unique!!",
      409
    );

  const hashedPassword = await bcrypt.hash(password, 12);
  if (!hashedPassword)
    throw new CustomError("CustomError while hasing password.", 500);

  await User.create({
    firstName,
    lastName,
    userName,
    password: hashedPassword,
    profileImage: `https://robohash.org/${firstName}`,
  });

  return res.status(201).send({
    success: true,
    message: "User created successfully.",
  });
};

const signIn = async (req, res: Response) => {
  const { userName, password } = req.body;

  if (!userName || !password) throw new CustomError("Empty fields found.", 204);

  const userExists = await User.findOne({ userName });

  if (!userExists) throw new CustomError("No user found.", 404);

  const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

  if (!isPasswordCorrect)
    throw new CustomError("Incorrect password entered.", 401);

  //generate token
  const _id = userExists.id;
  const token = jwt.sign({ _id }, ENV_CONFIG.ACCESS_TOKEN_KEY, {
    expiresIn: ENV_CONFIG.ACCESS_TOKEN_EXPIRY,
  });

  if (!token) throw new CustomError("No token found!", 404);

  res.cookie("token", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: false,
    sameSite: "none",
    secure: true,
  });

  res.status(200).send({
    user: {
      _id: userExists.id,
      firstName: userExists.firstName,
      lastName: userExists.lastName,
      userName: userExists.userName,

      profileImage: userExists.profileImage,
    },
    token,
    success: true,
  });
};

const signOut = async (req, res: Response) => {
  res.cookie("token", "");
  res.status(200).json({
    success: true,
    message: "Signed out successfully.",
  });
};

const getAllUsers = async (req, res: Response) => {
  const userId = req.user._id;
  const users = await User.find({
    _id: {
      $ne: userId,
    },
  }).select("-password");
  return res.status(200).json({
    success: true,
    total: users.length,
    users,
  });
};

export { signIn, signUp, signOut, getAllUsers };
