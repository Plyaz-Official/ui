import clsx from "clsx";
import { useState } from "react";

import { Box } from "@/components/Box/Box";
import { Heading } from "@/components/Heading/Heading";

export const SignupForm = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    name?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormFields((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!formFields.name) newErrors.name = "Name is required";
    if (!formFields.email) newErrors.email = "Email is required";
    if (!formFields.password) newErrors.password = "Password is required";
    else if (formFields.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.info("Form submitted", formFields);
    }
    console.info("Form submitteding", formFields);
  };

  return (
    <Box className="mx-auto w-full max-w-md rounded bg-white p-6 shadow-md">
      <Heading element="h2" size="xl" className="mb-4 text-center font-bold">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Box>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="name"
            value={formFields.name}
            onChange={handleChange}
            className={clsx(
              `
                mt-1 block w-full rounded-md border px-4 py-2 shadow-sm
                focus:border-blue-500 focus:ring-blue-500
              `,
              {
                "border-red-500": errors.name,
                "border-gray-300": !errors.name,
              }
            )}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </Box>
        <Box>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formFields.email}
            onChange={handleChange}
            className={`
              mt-1 block w-full border px-4 py-2
              ${errors.email ? "border-red-500" : "border-gray-300"}
              rounded-md shadow-sm
              focus:border-blue-500 focus:ring-blue-500
            `}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </Box>

        <Box>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formFields.password}
            onChange={handleChange}
            className={`
              mt-1 block w-full border px-4 py-2
              ${errors.password ? "border-red-500" : "border-gray-300"}
              rounded-md shadow-sm
              focus:border-blue-500 focus:ring-blue-500
            `}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </Box>

        <button
          type="submit"
          className={`
            w-full rounded-md bg-blue-600 px-4 py-2 text-white transition
            hover:bg-blue-700
            dark:bg-amber-800
          `}
        >
          Sign up
        </button>
      </form>
    </Box>
  );
};
