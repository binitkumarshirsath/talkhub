import apiConnector from ".";
import { LoginInputs } from "../components/Login";
import { apiRoutes } from "./routes";

export const login = (payload: LoginInputs) =>
  apiConnector.post(apiRoutes.login, payload);
