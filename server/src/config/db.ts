import mongoose from "mongoose";
import { ENV_CONFIG } from "./env-config.js";

export const connectToDB = async () => {
  const DB_URL = ENV_CONFIG.DB_URL;
  if (!DB_URL) throw new Error("DB URL not found.");

  mongoose
    .connect(DB_URL, {
      dbName: "TalkHub",
    })
    .then(() => console.log("Connection to DB successfull."))
    .catch((err) => {
      console.error(err);
      console.error("DB connection failed");
      process.exit(1);
    });
};
