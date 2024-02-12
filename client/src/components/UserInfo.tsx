const UserInfo = () => {
  return (
    <div className="flex gap-4 w-full  items-center">
      <img
        className="w-16 rounded-full"
        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
        alt="user"
      />
      <div className="flex flex-col">
        <h1 className="font-semibold font-sans text-[#7953F7] text-lg ">
          Full name
        </h1>
        <div>Username</div>
      </div>
    </div>
  );
};

export default UserInfo;
