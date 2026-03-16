import { RegisterFormValues } from "@/src/types";

export const authService = {
  async registerUser(data: RegisterFormValues) {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Registration failed");
    }

    return await res.json();
  },
};
