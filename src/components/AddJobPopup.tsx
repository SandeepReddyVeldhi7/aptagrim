import { useForm } from "react-hook-form";


const AddJobPopup = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isLoading },
      } = useForm({
        defaultValues: {
          title: "",
          location: "",
          type: "",
          status: "",
        },
      });
  return (
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
  )
}

export default AddJobPopup
