import React from "react";

export const Login = () => {
  return (
    <form
      className="space-y-4 bg-gradient-to-r from-purple-500 to-pink-500 "
      style={{
        boxShadow: "rgba(0,0,0,0.50) 5px 10px 15px",
        padding: "25px",
        borderRadius: "8px",
      }}
    >
      <div className="">
        <label htmlFor="email" className=" block font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          className="mt-1 p-2 block w-96 rounded-md border border-black focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="">
        <label htmlFor="password" className="block font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 p-2 block w-96 rounded-md border border-black focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-52 p-1 bg-green-400 text-white rounded-md hover:bg-green-600 focus:ring
           focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-blue-100"
        >
          Login
        </button>
        <button
          type="submit"
          className="w-52 m-2 p-1 bg-green-400 text-white rounded-md hover:bg-green-600 focus:ring
           focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-blue-100"
        >
          Register
        </button>
      </div>
    </form>
  );
};