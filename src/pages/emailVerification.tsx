import { useRouter } from "next/router";
import React from "react";
import EcommerceAccountVerification from "~/components/ecommerceAccountVerification";
import EcommerceHeader from "~/components/ecommerceHeader";

const SignUpVerificationPage: React.FC = () => {
  const router = useRouter();
  let email:string | string[] | undefined = router.query?.email ?? "";
  // console.log(email);

  // If `email` is `undefined` or an array, provide a default value or convert to string
  if (Array.isArray(email)) {
    email = email[0]; // or convert to string as per your requirement
  }
  else if (!email) { 
    email = ""; // or provide a default value
  }

  return (
    <>
      <EcommerceHeader />
      <EcommerceAccountVerification email={email!} />
    </>
  );
};

export default SignUpVerificationPage;
