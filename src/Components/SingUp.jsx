import axios from "axios";
import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SingUp = () => {
  const [showPass, setShowPass] = useState(false);
  const { handelCreateUserAccount } = useContext(AuthContext);
  const handelSingUpBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handelCreateUserAccount(email, password)
      .then((result) => {
        form.reset();
        console.log(result.user);
        console.log(result.user.metadata.creationTime);
        const creationTime = result.user.metadata.creationTime;
        const createdAt = result.user.metadata.createdAt;
        const accessToken = result.user.accessToken;
        const user = {
          email: email,
          creationTime: creationTime,
          createdAt: createdAt,
          accessToken: accessToken,
        };
        console.log(user);
        axios
          .post("https://coffe-store-server-cyan.vercel.app/user", user)
          .then((data) => {
            console.log(data.data);
          });
        // fetch('https://coffe-store-server-cyan.vercel.app/user', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email, password);
  };

  const handelShowPassword = () => {
    setShowPass(!showPass);
    console.log(showPass);
  };
  return (
    <div className="flex flex-col max-w-md p-6 mx-auto mt-10 rounded-md sm:p-10 bg-[#F4F3F0] font-raleway">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm dark:text-gray-600">
          Sign Up to access your account
        </p>
      </div>
      <form onSubmit={handelSingUpBtn} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div className="relative">
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            <span
              className="absolute right-5 bottom-3"
              onClick={handelShowPassword}
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <input
              type="submit"
              value="Sign Up"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white"
            ></input>
          </div>
          <p className="px-6 font-semibold text-sm text-center text-gray-600">
            Already have an account yet?
            <Link
              to="/singin"
              rel="noopener noreferrer "
              href="#"
              className="hover:underline ml-2 text-violet-600"
            >
              Sign In
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
