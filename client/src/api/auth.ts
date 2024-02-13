import apiConnector from ".";
import { LoginInputs } from "../components/Login";
import { RegisterInputs } from "../components/Register";
import { getAllUsersResponse } from "../types";
import { apiRoutes } from "./routes";

export const login = (payload: LoginInputs) =>
  apiConnector.post(apiRoutes.login, payload);

export const signup = (payload: RegisterInputs) =>
  apiConnector.post(apiRoutes.register, payload);

export const logout = () => apiConnector.post(apiRoutes.logout);

export const getAllUsers = () =>
  apiConnector.get<getAllUsersResponse>(apiRoutes.getAllUsers);
