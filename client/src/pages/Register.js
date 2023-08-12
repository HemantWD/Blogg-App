import React from "react";

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-96 mt-5 mb-5">
      <form
        className="space-y-4 bg-gradient-to-r from-purple-500 to-pink-500"
        style={{
          boxShadow: "rgba(0,0,0,0.50) 5px 10px 15px",
          padding: "25px",
          borderRadius: "8px",
        }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Enter You Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="mt-1 p-2 block w-96 rounded-md border border-black focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            required
            className="mt-1 p-2 block w-96 rounded-md border border-black focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            required
            className="mt-1 p-2 block w-96 rounded-md border border-black focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4 flex justify-center">
          <button
            type="submit"
            className="w-52 p-1 bg-green-400 text-white rounded-md hover:bg-green-600 focus:ring
           focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-blue-100 "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
