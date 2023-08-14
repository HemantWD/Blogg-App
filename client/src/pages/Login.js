import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context-api";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(inputs);
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-96">
      <form
        className="space-y-4 bg-gradient-to-r from-purple-500 to-pink-500 "
        style={{
          boxShadow: "rgba(0,0,0,0.50) 5px 10px 15px",
          padding: "25px",
          borderRadius: "8px",
        }}
      >
        <div className="">
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
          <label htmlFor="email" className=" block font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            name="email"
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
            onChange={handleChange}
            name="password"
            className="mt-1 p-2 block w-96 rounded-md border border-black focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
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
            <Link to="/register">Register</Link>
          </button>
        </div>
        {err && <p className="text-yellow-400 text-sm text-center">{err}</p>}
      </form>
    </div>
  );
};
