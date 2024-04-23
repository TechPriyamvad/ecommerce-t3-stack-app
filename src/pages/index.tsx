import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import SignUpPage from "./signup";
import SignUpVerificationPage from "./signupVerification";
import LoginPage from "./loginPage";
import CategoriesPage from "./categoriesPage";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      {/* <SignUpPage /> */}
      {/* <SignUpVerificationPage /> */}
      {/* <LoginPage /> */}
      <CategoriesPage />
    </>
  );
}