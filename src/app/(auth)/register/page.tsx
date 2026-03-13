"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { register } from "@/src/data/jobs";

export default function RegisterPage() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleRegister = async (data: register) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data?.name,
        email: data?.email,
        password: data?.password,
      }),
    });

    // const responseData = await res.json();

    if (res.ok) {
      alert("User registered successfully");
      router.push("/login");
    } else {
      alert(data?.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full  bg-gray-100">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>

          <Controller
            control={control}
            name="name"
            rules={{
              required: "name rquired",
            }}
            render={({ field }) => {
              return (
                <>
                  <input
                    {...field}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <h1 className="text-[red]">{errors?.name?.message}</h1>
                </>
              );
            }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>

          <Controller
            control={control}
            name="email"
            rules={{ required: "Email Required" }}
            render={({ field }) => {
              return (
                <>
                  <input
                    {...field}
                    type="email"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <h1 className="text-[red]">{errors?.email?.message}</h1>
                </>
              );
            }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>

          <Controller
            control={control}
            name="password"
            rules={{ required: "password required" }}
            render={({ field }) => {
              return (
                <>
                  <input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <h1 className="text-[red]">{errors?.password?.message}</h1>
                </>
              );
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
