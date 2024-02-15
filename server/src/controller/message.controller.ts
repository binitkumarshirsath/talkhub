import { Message } from "../models/message.model.js";
import { Response } from "express";
import { CustomError } from "../utils/custom-error.js";
import { getSocketIdViaUserId, io } from "../index.js";

const sendMessage = async (req, res: Response) => {
  const { receiverId, content } = req.body;
  const senderId = req.user;
  console.log(receiverId, senderId, content);
  if (!receiverId || !content || !senderId)
    throw new CustomError("Empty fields found.", 204);

  const message = await Message.create({
    senderId,
    receiverId,
    content,
  });

  if (!message)
    throw new CustomError("CustomError while creating messsage.", 500);

  // emit back response to receiverid
  const receiverSocektId = getSocketIdViaUserId(receiverId);

  if (receiverSocektId) {
    io.to(receiverSocektId).emit("send-message", message);
  }

  res.status(201).send({
    success: true,
    message: "Message sent successfully.",
  });
};

const getChat = async (req, res: Response) => {
  const receiverId = req.params?.receiverId;
  const senderId = req.user._id;

  if (!receiverId || !senderId || receiverId === "undefined")
    throw new CustomError("Empty fields found.", 404);

  const messages = await Message.find({
    $or: [
      { senderId, receiverId },
      { senderId: receiverId, receiverId: senderId },
    ],
  })
    .populate("senderId", "-password")
    .populate("receiverId", "-password")
    .sort({ createdAt: 1 })
    .exec();

  if (messages.length === 0) {
    return res.status(200).send({
      success: true,
      message: "Initiate the chat",
      data: messages,
    });
  }
  res.status(200).send({
    success: true,
    message: "Chat fetched successfully",
    data: messages,
  });
};

export { sendMessage, getChat };
