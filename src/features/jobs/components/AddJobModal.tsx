"use client";
import React, { useEffect, useRef } from "react";
import { FormData } from "@/src/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface AddJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

export const AddJobModal: React.FC<AddJobModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      title: "",
      type: "Full-time",
      status: "Draft",
      location: "",
    },
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    onSubmit(data);
    reset();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg animate-in zoom-in-95 duration-200"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold ">Add Job</h2>
          <button
            onClick={() => {
              onClose();
              reset();
            }}
            className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium -secondary mb-1">
              Job Title
            </label>
            <Controller
              control={control}
              name="title"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="input-field"
                  placeholder="Enter job title"
                />
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium -secondary mb-1">
              Job Type
            </label>
            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <select {...field} className="input-field">
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium -secondary mb-1">
              Status
            </label>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <select {...field} className="input-field">
                  <option value="Draft">Draft</option>
                  <option value="Active">Active</option>
                  <option value="Paused">Paused</option>
                </select>
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium -secondary mb-1">
              Location
            </label>
            <Controller
              control={control}
              name="location"
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="input-field"
                  placeholder="Enter location"
                />
              )}
            />
          </div>

          <div className="flex gap-2 justify-end mt-6">
            <button
              type="button"
              onClick={() => {
                onClose();
                reset();
              }}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
