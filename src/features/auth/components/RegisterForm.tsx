"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { RegisterFormValues } from "@/src/types";
import { authService } from "@/src/services";

export const RegisterForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleRegister = async (data: RegisterFormValues) => {
    try {
      await authService.registerUser(data);
      alert("User registered successfully");
      router.push("/login");
    } catch (error: any) {
      alert(error.message || "An error occurred during registration");
    }
  };

  return (
    <div className="flex items-center justify-center min-vh-screen w-full bg-bg-secondary">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="card w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-text">Create Account</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <Controller
            control={control}
            name="name"
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="Enter your name"
                  className="input-field"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className="input-field"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
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
          {isLoading ? "Registering..." : "Register"}
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-text-secondary">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
