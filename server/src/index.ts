import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "express-async-errors";
import { ENV_CONFIG } from "./config/env-config.js";
import { routes } from "./routes/routes.js";
import { errorHandler } from "./utils/error-handler.js";
import { connectToDB } from "./config/db.js";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { CustomError } from "./utils/custom-error.js";

const app = express();

const server = createServer(app);

export const io = new Server(server, {
  cors: {
    origin: ENV_CONFIG.FRONTEND_ORIGIN,
  },
});

connectToDB();

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1", routes);

app.use(errorHandler);

const connectedUsers = {}; //store user details as {userId : socketId}

export function getSocketIdViaUserId(userId: string) {
  if (!userId) throw new CustomError("Cant obtain socket id.");

  return connectedUsers[userId];
}

io.on("connection", (socket) => {
  console.log("User connected! Socket Id ==> ", socket.id);

  const userId = socket.handshake.auth.userId;

  if (userId) connectedUsers[userId as string] = socket.id;

  //send back active user list to *all* users , Object keys return array of keys
  io.emit("active-user-list", Object.keys(connectedUsers));
  console.log("ConnectedUsers", connectedUsers);
  //Clean up func
  socket.on("disconnect", () => {
    console.log("User disconnected! Socket Id ==> ", socket.id);
    //remove from connected user list
    delete connectedUsers[socket.id];
    // emit back connected users
    io.emit("active-user-list", Object.keys(connectedUsers));
  });
});

server.listen(ENV_CONFIG.PORT || 443, () => {
  console.log(`Server is up and running at PORT: ${ENV_CONFIG.PORT}`);
});
