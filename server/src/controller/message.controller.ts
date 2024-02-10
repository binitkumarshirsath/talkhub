import { Message } from "../models/message.model.js";
import { Response } from "express";

const sendMessage = async (req, res: Response) => {
  const { receiverId, content } = req.body;
  const senderId = req.user;
  console.log(receiverId, senderId, content);
  if (!receiverId || !content || !senderId)
    throw new Error("Empty fields found.");

  const message = await Message.create({
    senderId,
    receiverId,
    content,
  });

  if (!message) throw new Error("Error while creating messsage.");

  res.status(201).send({
    success: true,
    message: "Message sent successfully.",
  });
};

const getChat = async (req, res: Response) => {
  const receiverId = req.params.receiverId;
  const senderId = req.user._id;

  if (!receiverId || !senderId) throw new Error("Empty fields found.");

  const messages = await Message.find({
    senderId,
    receiverId,
  }).sort({ createdAt: -1 });

  if (messages.length === 0) {
    res.status(200).send({
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
