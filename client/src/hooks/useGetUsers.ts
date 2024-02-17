import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/auth";

export const useGetAllUsers = (searchQuery?: string) => {
  return useQuery({
    queryKey: ["users", searchQuery],
    queryFn: () => getAllUsers(searchQuery),
  });
};
