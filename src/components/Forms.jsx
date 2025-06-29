import React from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Appointment Submitted:", data);
    alert("Appointment submitted successfully!");
    reset();
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl border border-indigo-100 dark:border-gray-700 transition-all">
      <h2 className="text-2xl font-bold text-indigo-700 dark:text-white mb-6 text-center font-serif">
        Book an Appointment
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-indigo-700 dark:text-indigo-300 font-medium mb-1">
            Full Name
          </label>
          <input
            {...register("fullName", { required: "Name is required" })}
            className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 transition ${
              errors.fullName
                ? "border-red-400 ring-red-300"
                : "border-indigo-300 focus:ring-indigo-500"
            }`}
            placeholder="Enter full name"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900 px-2 py-1 rounded">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-indigo-700 dark:text-indigo-300 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 transition ${
              errors.email
                ? "border-red-400 ring-red-300"
                : "border-indigo-300 focus:ring-indigo-500"
            }`}
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900 px-2 py-1 rounded">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Appointment Date */}
        <div>
          <label className="block text-indigo-700 dark:text-indigo-300 font-medium mb-1">
            Appointment Date
          </label>
          <input
            type="date"
            {...register("date", { required: "Appointment date is required" })}
            className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 transition ${
              errors.date
                ? "border-red-400 ring-red-300"
                : "border-indigo-300 focus:ring-indigo-500"
            }`}
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900 px-2 py-1 rounded">
              {errors.date.message}
            </p>
          )}
        </div>

        {/* Department */}
        <div>
          <label className="block text-indigo-700 dark:text-indigo-300 font-medium mb-1">
            Department
          </label>
          <select
            {...register("department", { required: "Please select a department" })}
            className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 transition ${
              errors.department
                ? "border-red-400 ring-red-300"
                : "border-indigo-300 focus:ring-indigo-500"
            }`}
          >
            <option value="">-- Select Department --</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="general">General Medicine</option>
          </select>
          {errors.department && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900 px-2 py-1 rounded">
              {errors.department.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-gray-100 dark:bg-gray-700 text-indigo-700 dark:text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 border border-indigo-300 dark:border-gray-600 transition duration-200"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
