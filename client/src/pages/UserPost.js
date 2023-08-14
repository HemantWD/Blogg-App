import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserPost = () => {
  const [post, setPost] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split("/")[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/blog/id`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // Added empty dependency array to useEffect

  const handleDelete = async () => {
    console.log("clicked");
    try {
      await axios.delete(`${process.env.REACT_APP_API}/blog/${blogId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">My Blogs</h2>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        {post &&
          post.map((post) => (
            <div className="bg-white p-6 shadow-lg rounded-lg" key={post.id}>
              <img src={post.img} alt="" className="" />
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
              <img
                src="https://wiki.vintagestory.at/images/8/8c/Delete.png"
                alt=""
                className="w-5 h-5"
                onClick={handleDelete}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
