import apiConnector from ".";
import { LoginInputs } from "../components/Login";
import { RegisterInputs } from "../components/Register";
import { apiRoutes } from "./routes";

export const login = (payload: LoginInputs) =>
  apiConnector.post(apiRoutes.login, payload);

export const signup = (payload: RegisterInputs) =>
  apiConnector.post(apiRoutes.register, payload);
