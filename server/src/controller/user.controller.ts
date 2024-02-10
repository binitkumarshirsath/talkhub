import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { Response, response } from "express";
import jwt from "jsonwebtoken";
import { ENV_CONFIG } from "../config/env-config.js";

const signUp = async (req, res: Response) => {
  const { firstName, lastName, userName, password, profileImage } = req.body;

  if (!firstName || !lastName || !userName || !password) {
    throw new Error("Empty fields found");
  }

  console.log(userName);
  const userNameExists = await User.findOne({ userName });
  if (userNameExists)
    throw new Error("Username already exists , try something unique!!");

  const hashedPassword = await bcrypt.hash(password, 12);
  if (!hashedPassword) throw new Error("Error while hasing password.");

  const user = await User.create({
    firstName,
    lastName,
    userName,
    password: hashedPassword,
    profileImage: profileImage ? profileImage : null,
  });

  return res.status(201).send({
    success: true,
    message: "User created successfully.",
  });
};

const signIn = async (req, res: Response) => {
  const { userName, password } = req.body;

  if (!userName || !password) throw new Error("Empty fields found.");

  const userExists = await User.findOne({ userName });

  if (!userExists) throw new Error("No user found.");

  const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

  if (!isPasswordCorrect) throw new Error("Incorrect password entered.");

  //generate token
  const uid = userExists.id;
  const token = jwt.sign({ uid }, ENV_CONFIG.ACCESS_TOKEN_KEY, {
    expiresIn: ENV_CONFIG.ACCESS_TOKEN_EXPIRY,
  });

  if (!token) throw new Error("No token found!");

  res.cookie("token", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
  });

  res.status(200).send({
    _id: userExists.id,
    firstName: userExists.firstName,
    success: true,
  });
};

export { signIn, signUp };
