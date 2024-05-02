import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { MdEdit, MdDelete } from "react-icons/md";
import { useTable, useSortBy, usePagination } from "react-table";

const columns = [
  {
    Header: "S.No.",
    accessor: "index",
  },
  {
    Header: "Email",
    accessor: "emailId",
  },
  {
    Header: "Date",
    accessor: "joined",
  },
];

const SubscribedUsers = ({ list }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState(list);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const data = useMemo(() => list);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    pageCount,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="min-h-screen w-full flex justify-center  bg-gray-200">
      <div className="max-w-7xl w-full h-fit my-12 mx-auto p-4 bg-white shadow-md rounded-lg ">
        <div className="font-bold text-xl mb-2 ">Subscribed Users</div>

        {/* Table to display filtered user information */}
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-4 py-4 text-left cursor-pointer "
                      key={column.id}
                    >
                      {column.render("Header")}
                      {column.isSorted && (
                        <span>{column.isSortedDesc ? " ⬇️ " : " ⬆️ "}</span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className={`hover:bg-base-200 ${rowIndex}`}
                    key={rowIndex}
                  >
                    {columns.map((column, columnIndex) => {
                      return (
                        <td
                          {...row.cells[columnIndex].getCellProps()}
                          className=" text-left w-56 overflow-hidden"
                          key={columnIndex}
                        >
                          <p className="capitalize">
                            {row.values[column.accessor]}
                          </p>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {pageCount > 1 && (
          <div className="flex justify-center mt-4 gap-4 bg-gray-100 py-4 items-center">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button
              onClick={previousPage}
              disabled={!canPreviousPage}
              className="btn btn-neutral"
            >
              Prev
            </button>
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageCount}
              </strong>{" "}
            </span>
            <button
              onClick={nextPage}
              disabled={!canNextPage}
              className="btn btn-neutral"
            >
              Next
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribedUsers;
