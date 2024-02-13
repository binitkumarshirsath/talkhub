const authAPIRoutes = {
  login: "/auth/sign-in",
  register: "/auth/sign-up",
  logout: "/auth/sign-out",
  getAllUsers: "/auth/users",
};

const chatAPIRoutes = {
  getChat: "/chat/get-chat",
  sendMessage: "/chat/send",
};

export const apiRoutes = {
  ...authAPIRoutes,
  ...chatAPIRoutes,
};
