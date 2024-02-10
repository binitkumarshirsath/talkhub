import express from "express";
import "express-async-errors";
import { ENV_CONFIG } from "./config/env-config.js";
import { routes } from "./routes/routes.js";
import { errorHandler } from "./utils/error-handler.js";
import { connectToDB } from "./config/db.js";

const app = express();
connectToDB();

app.use(express.json());

app.use("/api/v1", routes);

app.use(errorHandler);

app.listen(ENV_CONFIG.PORT || 443, () => {
  console.log(`Server is up and running at PORT: ${ENV_CONFIG.PORT}`);
});
