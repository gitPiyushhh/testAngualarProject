import React, { useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import Options from "./Options";
import TableItemMobile from "./TableItemMobile";

function Table({
  isFor,
  name,
  tableHeadMetaData,
  data,
  handleRowClick,
  isDownloadable,
  sortOptions,
  isFilterable,
}) {
  const [query, setQuery] = useState("");

  /* 
    Global state
  */
  // const mobileSidebarOpen = useSelector((state) => state.ui.mobileSidebarOpen);
  const mobileSidebarOpen = false;

  const width =
    100 / tableHeadMetaData.length >= 25
      ? 100 / tableHeadMetaData.length - 1
      : 100 / tableHeadMetaData.length;

  function handleQueryChange(e) {
    const targetValue = e.target.value;
    setQuery(targetValue);
  }
  return (
    <div className="w-full bg-stone-50 p-4 shadow-md mb-4">
      <Options
        isFor={isFor}
        name={name}
        query={query}
        handleQueryChange={handleQueryChange}
        isDownloadable={isDownloadable}
        sortOptions={sortOptions}
        isFilterable={isFilterable}
      />

      {/* Table here */}
      <div role="table" className={`${mobileSidebarOpen ? 'mt-[-0.8rem]' : 'mt-4'}`}>
        <div className="justify-between bg-stone-200 p-3 text-sm font-semibold md:flex hidden">
          {tableHeadMetaData.map((item) => (
            <TableHead
              key={item.name}
              name={item.name}
              width={width}
              rightAlign={item.rightAlign}
            />
          ))}
        </div>

        {/* Custom table for mobile */}
        {data?.length ? (
          <>
            <div className="md:block hidden">
              {data.map((item) => (
                <TableRow
                  key={`${JSON.stringify(item)}`}
                  data={item}
                  width={width}
                  handleRowClick={
                    handleRowClick
                      ? handleRowClick
                      : () => console.log("No row click handler assigned!")
                  }
                />
              ))}
            </div>

            <div className="md:hidden flex flex-col gap-1">
                  {data.map((el) => (
                    <div key={JSON.stringify(el)}><TableItemMobile data={el}/></div>
                  ))}
            </div>  
          </>
        ) : (
          // <NoData />
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}

export default Table;
