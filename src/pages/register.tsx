import React from "react";
import { BreadCrumb, InputWidget } from "../components";
import { Footer } from "../sections";

import Link from "next/link";

function Register() {
  const doLogin = () => {
    alert("Logged in successfully");
  };
  return (
    <>
      {/* Begin Breadcrumb Section */}
      <BreadCrumb />
      {/*  End Breadcrumb Section */}
      <div className="text-center justify-center">
        <p className="font-semibold text-blue-500 italic ">-Login</p>
        <h2 className="text-2xl font-bold">Login into your Account</h2>
      </div>

      <div className="container px-6 py-3 rounded-3xl mx-auto mb-12 sm:w-9/12 md:w-6/12 lg:w-5/12">
        <div className="">
          <form action="">
            <InputWidget name="email" type="email" title="Email Address" />
            <InputWidget
              name="password"
              type="password"
              title="Create Password"
            />
            <div className="my-4">
              <input
                type="checkbox"
                name="remember"
                className="text-green-400 bg-green-400mr-2"
              />
              <label htmlFor="remember">
                I have read the &nbsp;
                <span className="underline font-semibold">
                  Terms & Conditions
                </span>
              </label>
            </div>
          </form>
        </div>
        {/* begin helper buttons */}
        <div className="flex justify-center mb-12">
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold border tranisition duration-200 text-xl ease-out hover:shadow-lg mr-3"
            onClick={doLogin}
          >
            Register
          </button>
          <button className=" bg-white px-6 py-3 rounded-full font-semibold border tranisition duration-200 text-xl ease-out hover:border-gray-300 hover:shadow-lg">
            <Link href="/login">Login</Link>
          </button>
        </div>
      </div>
      {/* end helper buttons  */}
      {/* begin footer section */}
      <Footer />
      {/* end footer section */}
    </>
  );
}

export default Register;
