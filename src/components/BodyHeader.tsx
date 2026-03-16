"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/src/hooks/useRedux";
import { setSearchTerm } from "@/src/redux/slices/searchSlice";
import { ArrowLeft } from "lucide-react";
interface BodyHeaderProps {
  title?: string;
}

const BodyHeader: React.FC<BodyHeaderProps> = ({ }) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");
  // const [delay,setDelay]=useState()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // setDelay(search);
      dispatch(setSearchTerm(search));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search, 300]);

  return (
    <div className="flex">
      <div className="flex gap-6  justify-between bg-primary p-4 w-full items-center">
        <div className="flex justify-start items-center gap-6 w-[30%]">
          <button className="bg-bg h-fit items-center rounded-full p-2 hover:bg-bg-secondary transition-colors">
            <ArrowLeft className="  " />
          </button>
          <h1 className="text-2xl font-bold text-secondary ">Job Posting</h1>
        </div>

        <div className="flex justify-center bg-secondary relative items-center w-[40%]">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="p-3 w-full rounded-sm bg-bg  outline-none "
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

        <div className="flex justify-end text-secondary  items-end w-[20%]">
          <div className="flex flex-col">
            <span className="text-secondary/70 font-medium">AI Powered by</span>
            <h1 className="text-3xl font-semibold">psyHire.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyHeader;
