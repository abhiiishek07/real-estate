import Property from "@/components/Card/Property";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import property_4_img from "@/assets/images/property_4.jpg";
import { useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination/Pagination";
import EmptyData from "@/assets/images/Empty_Data.png";

const Residential = ({ data }) => {
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handleSearch = () => {
    setCurrentPage(0);
    let { query } = router;
    query.page = 1;

    router.push({
      pathname: "/residential",
      query: query,
    });

    let filtered = data;

    if (status) {
      filtered = filtered.filter((item) => item.status.name === status);
    }
    if (location) {
      filtered = filtered.filter((item) => item.city === location);
    }

    setFilteredData(filtered);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleClear = () => {
    setCurrentPage(0);
    let { query } = router;
    query.page = 1;

    router.push({
      pathname: "/residential",
      query: query,
    });
    setStatus("");
    setLocation("");
    setFilteredData(data);
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);

    let { query } = router;
    query.page = selectedPage.selected + 1;

    router.push({
      pathname: "/residential",
      query: query,
    });
  };

  return (
    <div className=" flex justify-center px-4 ">
      <div className="flex flex-col w-full max-w-6xl  mt-8">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Residential</a>
            </li>
          </ul>
        </div>
        <div className=" w-fit font-bold text-3xl flex items-center gap-2 justify-center py-2">
          <p> Residential Properties </p>
          <FaHome />
        </div>
        <img
          src={property_4_img.src}
          alt="Banner Image"
          class=" w-full h-96 rounded-md "
        />

        <div className="border w-full my-10 flex flex-col lg:flex-row p-4 justify-between bg-slate-50 rounded-md gap-4">
          <div className="flex gap-4 justify-center items-center">
            <p className="text-lg text-gray-900">Status</p>
            <select
              className="select select-bordered w-full font-bold"
              value={status}
              onChange={handleStatusChange}
            >
              <option disabled value="">
                Select
              </option>
              <option value="New Launch">New Launch</option>
              <option value="Under Construction">Under Construction</option>
              <option value="Ready To Move">Ready To Move</option>
            </select>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex gap-4 justify-center items-center ">
            <p className="text-lg text-gray-900">Location</p>
            <select
              className="select select-bordered w-full font-bold"
              value={location}
              onChange={handleLocationChange}
            >
              <option disabled value="">
                Select
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
            </select>
          </div>

          <div className="divider divider-horizontal"></div>
          <div className="flex  gap-3 items-center justify-center">
            <button
              className="btn bg-green-700 text-white hover:bg-green-700 px-10 uppercase"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="btn border-red-500 hover:bg-red-500 hover:text-white uppercase px-10 bg-white"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
        {currentItems.length === 0 ? (
          <div className="max-w-xl mx-auto my-5">
            <img src={EmptyData.src} alt="No property" />
            <p className="text-2xl text-center font-bold text-gray-400">
              Oops! No Property Found
            </p>
          </div>
        ) : (
          <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
              {currentItems.map((item, index) => (
                <Property key={index} data={item} />
              ))}
            </div>
            <div className="my-5">
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
                currentPage={currentPage}
                forcePage={currentPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Residential;
