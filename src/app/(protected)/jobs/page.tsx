"use client";
import { useCallback, useState } from "react";
import JobDetails, { JobCard } from "@/src/components/JobCard";
import AddJob from "@/src/components/AddJob";
import Filters from "@/src/components/Filters";
import { jobs, FormData } from "@/src/data/jobs";
import { Controller, useForm } from "react-hook-form";
import { useSearch } from "@/src/context/searchContext";

const Page = () => {
  const { searchTerm } = useSearch();
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  
  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  const handleFilterClick = useCallback((value: string) => {
    setFilter(value);
  }, []);

  const filteredJobs =
    filter === "All"
      ? jobs.filter((job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : jobs.filter(
          (job) =>
            job.status === filter &&
            job.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  const handleAddJob = (data: FormData) => {
    jobs.push({
      id: crypto.randomUUID(),
      title: data.title,
      type: data.type,
      status: data.status,
      location: data.location,
      candidates: [
        {
          id: 1,
          totalCandidates: 0,
          resumeScreened: 0,
          inProgress: 0,
          hired: 0,
          rejected: 0,    
        },
      ],
    });
    setModalOpen(false);
  };

  return (
    <div>
      <Filters onClick={handleFilterClick} state={filter} />
      <div className=" ">
        {filteredJobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {" "}
              No jobs found with status
            </h1>
          </div>
        ) : (
          <div className="grid 2xl:grid-cols-4 gap-4 mt-2">
            <AddJob onClick={handleClick} />
            {filteredJobs?.map((job) => (
              <JobCard job={job} key={job.id} />
            ))}
          </div>
        )}

        {modalOpen && (
          <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg  w-full max-w-lg ">
              <div className="flex justify-between item-center">
                <h2 className="text-xl font-bold mb-4">Add Job</h2>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    reset();
                  }}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  X
                </button>
              </div>

              <p className="text-gray-700">
                This is a simple modal for adding a new job.
              </p>

              <form onSubmit={handleSubmit(handleAddJob)}>
                <Controller
                  control={control}
                  name="title"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="text"
                        placeholder="Job Title"
                        className="border border-gray-300 rounded px-3 py-2 mt-4 w-full"
                      />
                      {errors.title && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </>
                  )}
                />

                <Controller
                  control={control}
                  name="location"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="text"
                        placeholder="Location"
                        className="border border-gray-300 rounded px-3 py-2 mt-2 w-full"
                      />
                      {errors.location && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </>
                  )}
                />

                <Controller
                  control={control}
                  name="type"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <select
                        {...field}
                        className="border border-gray-300 rounded px-3 py-2 mt-2 w-full"
                      >
                        <option value="">Select Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Internship">Internship</option>
                        <option value="Contract">Contract</option>
                      </select>
                      {errors.type && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </>
                  )}
                />
                <Controller
                  control={control}
                  name="status"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <select
                        {...field}
                        className="border border-gray-300 rounded px-3 py-2 mt-2 w-full"
                      >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Closed">Closed</option>
                        <option value="Paused">Paused</option>
                        <option value="Draft">Draft</option>
                      </select>

                      {errors.status && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </>
                  )}
                />

                <div className="flex justify-center items-center  mx-auto">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-purple-600  text-white px-4 py-2 rounded mt-4 hover:bg-purple-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Page;
