import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "../utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading , setUser} from "@/redux/authSlice";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.auth.loading);

  const changeEventListener = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // , "email","phoneNumber", "password", "role", "profile"
    // console.log("input", input)

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data) {
      }
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("error : ", error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2  border border-gray-200 m-10 p-6"
        >
          <div className="flex items-center justify-center">
            <h3 className="text-blue-400 font-bold text-3xl">Login</h3>
          </div>

          <div className="my-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              name="email"
              value={input.email}
              onChange={changeEventListener}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              name="password"
              value={input.password}
              onChange={changeEventListener}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              required
            />
          </div>

          <div className="flex gap-3 my-3">
            <div className="flex items-center mb-4">
              <input
                name="role"
                checked={input.role == "recruiter"}
                value="recruiter"
                onChange={changeEventListener}
                id="recruiter"
                type="radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500    dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="recruiter"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Login as recruiter
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                value="student"
                name="role"
                checked={input.role == "student"}
                onChange={changeEventListener}
                id="student"
                type="radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500    dark:bg-gray-700 dark:border-gray-600"
                required
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Login as student
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center mt-5 ">
            {loading ? (
              <Button className="w-full text-white bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Loader2 className="mr-2 w-4 animate-spin" />
                Please Wait...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full text-white bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Login
              </Button>
            )}
          </div>
          <div>
            <p className="text-sm">
              Don't have an account?{" "}
              <Link className="text-blue-600" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
