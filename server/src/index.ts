import express from "express";
import { ENV_CONFIG } from "./config/env-config.js";

const app = express();

app.listen(ENV_CONFIG.PORT || 443, () => {
  console.log(`Server is up and running at PORT: ${ENV_CONFIG.PORT}`);
});
