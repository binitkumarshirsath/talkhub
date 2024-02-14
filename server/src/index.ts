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

const app = express();
const server = createServer(app);
const io = new Server(server, {
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

io.on("connection", (socket) => {
  console.log("User connected!");

  socket.on("disconnect", () => {
    console.log("User disconnected.");
  });
});

server.listen(ENV_CONFIG.PORT || 443, () => {
  console.log(`Server is up and running at PORT: ${ENV_CONFIG.PORT}`);
});
