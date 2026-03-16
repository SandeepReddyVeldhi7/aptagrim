"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { LoginFormValues } from "@/src/types";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginFormValues) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/jobs",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-secondary">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="card w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 ">Login</h2>
        
        <div className="mb-4">
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="input-field"
                />
                {errors.email && (
                  <p className="error-field">{errors.email.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-6">
          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="input-field"
                />
                {errors.password && (
                  <p className="error-field">{errors.password.message}</p>
                )}
              </>
            )}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full disabled:opacity-50"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        
        <div className="mt-4 text-center">
          <span className="text-sm -secondary">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
