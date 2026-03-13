"use client";

import { login } from "@/src/data/jobs";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";



export default function LoginPage() {

  const {
    control,
    handleSubmit,
    formState: { errors,	isLoading },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });


const handleLogin = async (data:login) => {
  const res = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: true,
    callbackUrl: "/jobs",
  });
  


};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white p-8 text-black rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "required",
          }}
          render={({ field }) => {
            return (
              <>
                <input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-3 py-2 mb-4"
                />
                <h1 className="text-[red]">{errors?.email?.message}</h1>
              </>
            );
          }}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: "password required",
          }}
          render={({ field }) => {
            return (
              <>
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-lg px-3 py-2 mb-6"
                />
                <h1 className="text-[red]">{errors?.password?.message}</h1>
              </>
            );
          }}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <span className="mt-2 text-sm text-gray-600">
          Not have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
}
