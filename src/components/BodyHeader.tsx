"use client";

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useAppDispatch } from "@/src/hooks/useRedux";
import { setSearchTerm } from "@/src/redux/slices/searchSlice";

interface BodyHeaderProps {
  title?: string;
}

const BodyHeader: React.FC<BodyHeaderProps> = ({ title = "Default" }) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    dispatch(setSearchTerm(value));
  };

  return (
    <div className="flex">
      <div className="flex gap-6 justify-between bg-primary-dark p-4 w-full items-center">
        <div className="flex justify-start items-center gap-6 w-[30%]">
          <button className="bg-bg h-fit items-center rounded-full p-2 hover:bg-bg-secondary transition-colors">
            <FaArrowLeft className="text-sm text-text" />
          </button>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>

        <div className="flex justify-center relative items-center w-[40%]">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="p-3 w-full rounded-sm bg-bg text-text outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search by Job title, location, type or ID"
          />
          <div className="absolute flex top-4 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-secondary"
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

        <div className="flex justify-end text-white items-end w-[20%]">
          <div className="flex flex-col">
            <span className="text-white/70 font-medium">AI Powered by</span>
            <h1 className="text-3xl font-semibold">psyHire.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyHeader;
