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
  return (
    <>
      <SignUpPage />
      {/* <SignUpVerificationPage /> */}
      {/* <LoginPage /> */}
      {/* <CategoriesPage /> */}
    </>
  );
}