const authAPIRoutes = {
  login: "/auth/sign-in",
  register: "/auth/sign-up",
  logout: "/auth/sign-out",
  getAllUsers: "/auth/users",
};

export const apiRoutes = {
  ...authAPIRoutes,
};
