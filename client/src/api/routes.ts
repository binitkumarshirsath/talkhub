const authAPIRoutes = {
  login: "/auth/sign-in",
  register: "/auth/sign-up",
  logout: "/auth/sign-out",
  getAllUsers: "/auth/users",
};

const chatAPIRoutes = {
  getChat: "/chat/get-chat",
};

export const apiRoutes = {
  ...authAPIRoutes,
  ...chatAPIRoutes,
};
