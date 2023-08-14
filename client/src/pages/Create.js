import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Create = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        `${process.env.REACT_APP_API}/upload`,
        formData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_API}/blog/add`, {
        title,
        description: value,
        img: imgUrl,
      });
      navigate("/userPost");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="max-w-md mx-auto p-6 bg-white mt-5 mb-5 rounded shadow-md"
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
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            id="description"
            className="mt-1 p-2 w-full   border-2 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
            style={{ minHeight: "150px" }}
          />
        </div>

        <div className="">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image Url
          </label>
          <input
            type="url"
            id="image"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="mt-1 p-2 w-full border-2 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
          />

          <input
            type="file"
            id="file"
            className="mt-1 p-2 "
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-blue-100"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};
