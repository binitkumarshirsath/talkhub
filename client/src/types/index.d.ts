import { User } from "../context/auth-context";

export type errorResponse = {
  response: {
    data: {
      message: string;
    };
  };
};

export type getAllUsersResponse = {
  success: true;
  total: number;
  users: User[];
};
