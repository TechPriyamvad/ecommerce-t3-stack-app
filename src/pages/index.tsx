import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import SignUpPage from "./signup";
import SignUpVerificationPage from "./signupVerification";
import LoginPage from "./loginPage";
import CategoriesPage from "./categoriesPage";
import { useState,useEffect } from "react";
import { sign } from "crypto";

export default function Home() {
  const signup = api.user.signUp.useMutation({name:"priyamvad",email:"priyamvad@gmail.com",password:"12345678"});
  
  return (
    <>
      {/* <SignUpPage /> */}
      <h1 className="text-2xl text-black font-medium">
            {signup.data ? signup.data.message : "Loading tRPC query..."}
      </h1>
      {/* <SignUpVerificationPage /> */}
      {/* <LoginPage /> */}
      {/* <CategoriesPage /> */}
    </>
  );
}