import React from "react";
import Navbar from "../shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { USER_API_END_POINT } from "../utils/constant.js";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function Signup() {
    const [input, setInput] = useState({
        fullname:"",
        email:"",
        phoneNumber:"",
        password:"",
        role:"",
        profile:''
    })
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const loading = useSelector((store) => store.auth.loading);

    const changeEventListener = (e)=>{
        setInput(
            {...input,[e.target.name]:e.target.value
                
            })
    }
    const changeFileListener = (e)=>{
        setInput(
            {...input,profile:e.target.files?.[0]
            })
    }
    const submitHandler = async(e)=>{
      e.preventDefault()

      const formData = new FormData();
      formData.append("fullname", input.fullname)
      formData.append("email", input.email)
      formData.append("phoneNumber", input.phoneNumber)
      formData.append("password", input.password)
      formData.append("role", input.role)
      if(input.profile){
        formData.append("profile",input.profile)
      }
      // , "email","phoneNumber", "password", "role", "profile"
      // console.log("input", input)

      try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
          headers:{
            "Content-Type":"multipart/form-data"
          },
          withCredentials:true
        })
        console.log("res",res)
        if(res.data.success){
          navigate('/login')
          toast.success(res.data.message)
        }
        
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message); // Error message from server
      } else {
          toast.error('An unexpected error occurred. Please try again.'); // Fallback error message
      }
        console.log("error : ",error)
      }finally{
        dispatch(setLoading(false));
        
      }
    }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} action="" className="w-1/2  border border-gray-200 m-10 p-6">
          <div className="flex items-center justify-center">
            <h3 className="text-blue-400 font-bold text-3xl">Sign Up</h3>
          </div>
          <div className="my-3">
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full name
            </label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventListener}
              id="full_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Maxwell"
              required
            />
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
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
            value={input.phoneNumber}
            onChange={changeEventListener}
            name="phoneNumber"
              type="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your contact number"
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
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventListener}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              required
            />
          </div>

          {/* to upload profile photo */}
          <div className="my-3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
            name="profile"
            
            onChange={changeFileListener}
              accept="image/*"
              className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 border-gray-600 dark:placeholder-gray-400 focus:outline-none"
              id="file_input"
              type="file"
            />
          </div>

        

          <div className="flex gap-3 my-3">
            <div className="flex items-center mb-4">
              <input
                id="recruiter"
                name="role"
                value="recruiter"
                checked={input.role=="recruiter"}
                onChange={changeEventListener}
                type="radio"
                
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500    dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="recruiter"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sign up as recruiter
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
              value="student"
               name="role" 
              checked={input.role=="student"}
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
                Sign up as student
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center mt-5 ">
          { loading ? (
              <Button className="w-full text-white bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Loader2 className="mr-2 w-4 animate-spin" />
                Please Wait...
              </Button>
            ) : (
              <button type="submit" className="w-full text-white bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
            )}
         
          </div>
          <div>
            <p className="text-sm">Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}
