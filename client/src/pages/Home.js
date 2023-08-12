import React from "react";
import { dummyBlogs } from "../resources/context-api";

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Latest Blogs</h2>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        {dummyBlogs.map((blog) => (
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src={blog.img} alt={blog.img} className="" />
            <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
