import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/apiUsers";
import Table from "./Table";
import UserCard from "./UserCard";
import UserPage from "./UserPage";
import Loder from "./Loder";

const AppLayout = () => {
  /*
    React query
  */
  const { isLoading, isError, data } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  /* 
    Meta data
  */
  const tableHeadMetaData = [
    {
      name: "ID",
    },
    {
      name: "Name",
    },
    {
      name: "Experience",
    },
    {
      name: "Fees",
      rightAlign: true,
    },
  ];

  return (
    <div>
      {isLoading ? (
        <Loder />
      ) : (
        <div className="flex flex-col">
          {/* <Table
        isFor="User's"
        tableHeadMetaData={tableHeadMetaData}
        data={[]}
        handleRowClick={() => alert("No event hander till")}
        isFilterable={false}
        isDownloadable={false}
        sortOptions={false}
        key={Date.now()}
      /> */}

          {data && (
            <div className="w-full">
              {data.map((item) => (
                <UserCard data={item} />
              ))}
            </div>
          )}

          {/* Dyanamic routing here */}
          {data && <UserPage data={data[0]} />}
        </div>
      )}
    </div>
  );
};

export default AppLayout;
