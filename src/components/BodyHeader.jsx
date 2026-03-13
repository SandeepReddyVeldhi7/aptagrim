"use client";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useSearch } from "../context/searchContext";
const BodyHeader = ({ title = "Default" }) => {
  const { handleSearch } = useSearch();
  const [search, setSearch] = React.useState("");

  const handle = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className="flex   ">
      <div className="flex gap-6 justify-between bg-purple-700 p-4  w-full item-center">
        <div className="flex justify-start items-center gap-6 w-[30%]">
          <button className="bg-white h-fit   items-center rounded-4xl ">
            <FaArrowLeft className="text-sm" />
          </button>

          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
        <div className="flex justify-center relative  item-center w-[40%] ">
          <input
            type="text"
            value={search}
            onChange={handle}
            className="p-3 w-full rounded-sm bg-white outline-none"
            placeholder="Search by Job title or Job location or Job type or Job ID"
          />
          <div className="absolute flex top-4 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-end  text-white  item-end w-[20%]">
          <div className="flex flex-col">
            {" "}
            <span className="text-gray-300">AI Powered by </span>
            <h1 className="text-3xl font-semibold">psyHire.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyHeader;
