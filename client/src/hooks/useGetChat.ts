import { useQuery } from "@tanstack/react-query";
import { getChat } from "../api/chat";

export const useGetChat = (userId: string) => {
  return useQuery({
    queryKey: [`chat`, userId],
    queryFn: () => getChat(userId),
  });
};
