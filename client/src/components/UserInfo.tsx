import { User } from "../context/auth-context";

interface UserInfoProps {
  user: User | null;
}

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="flex gap-4 w-full  items-center">
      <img
        className="w-16 h-16 object-cover rounded-full"
        src={
          user?.profileImage
            ? user.profileImage
            : "https://images.unsplash.com/photo-1552873816-636e43209957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZHxlbnwwfHwwfHx8MA%3D%3D"
        }
        alt="user"
      />
      <div className="flex flex-col">
        <h1 className="font-semibold font-sans text-[#7953F7] text-lg ">
          {user?.firstName || "No one"} {user?.lastName || "Selected"}
        </h1>
        <div>{user?.userName}</div>
      </div>
    </div>
  );
};

export default UserInfo;
