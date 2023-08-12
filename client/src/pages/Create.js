import React from "react";

export const Create = () => {
  return (
    <div
      className="max-w-md mx-auto p-6 bg-transparent mt-5 mb-5 rounded shadow-md"
      style={{
        boxShadow: "rgba(0,0,0,0.50) 5px 10px 15px",
        padding: "25px",
        borderRadius: "8px",
      }}
    >
      <h2 className="text-2xl text-center font-semibold mb-4">
        Write a new blog
      </h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Title
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border-2 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            cols="52"
            rows="10"
            className="mt-1 p-2 w-full border-2 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image Url
          </label>
          <input
            type="url"
            id="image"
            className="mt-1 p-2 w-full border-2 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-blue-100"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};
