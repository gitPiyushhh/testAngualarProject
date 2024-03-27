import React, { useCallback } from "react";

const UserPage = ({ data }) => {
  const handleNavigateUser = useCallback(() => {
    alert("Routing logic here");
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%]">
        <div
          className="p-8 rounded-lg w-full m-8 flex flex-col gap-8 relative"
          onClick={handleNavigateUser}
        >
          <span className="text-stone-700 font-black text-2xl">
            {data?.name}
          </span>

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
              <span className="text-stone-700 text-md">
                {data?.address.city}
              </span>
            </div>
          </div>

          <div className="flex space-x-4 justify-start items-start">
            <span className="font-bold text-stone-700 underline">
              Comapany Details:{" "}
            </span>

            <div className="flex space-x-1">
              <span className="text-stone-700 text-md">
                {data?.company.name}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center space-x-4 absolute right-[0%]">
            {data?.company.bs.split(" ").map((item) => (
              <span className="bg-indigo-400 text-stone-50 w-fit p-2 rounded-md">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
