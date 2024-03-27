import React, { useCallback } from "react";

const UserCard = ({ data }) => {
  const handleNavigateUser = useCallback(() => {
    alert("Navigate to cicked user");
  }, []);

  return (
    <div
      className="w-[80%] p-8 rounded-lg m-8 flex flex-col gap-8 shadow-lg cursor-pointer hover:scale-[1.02] transition-all duration-300"
      onClick={handleNavigateUser}
    >
      <span className="text-stone-700 font-black text-2xl">{data?.name}</span>

      <div className="flex space-x-10 justify-start items-start">
        <span className="font-bold text-stone-700 underline">
          Contact Details:{" "}
        </span>

        <div className="flex flex-col gap-4">
          <span className="text-stone-700 text-md">{data?.email}</span>
          <span className="text-stone-700 text-md">{data?.phone}</span>
          <span className="text-stone-700 text-md">{data?.website}</span>
        </div>
      </div>

      <div className="flex space-x-4 justify-start items-start">
        <span className="font-bold text-stone-700 underline">
          Residential Details:{" "}
        </span>

        <div className="flex space-x-1">
          <span className="text-stone-700 text-md">
            {data?.address.street} {","}
          </span>
          <span className="text-stone-700 text-md">
            {data?.address.suite} {","}
          </span>
          <span className="text-stone-700 text-md">{data?.address.city}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
