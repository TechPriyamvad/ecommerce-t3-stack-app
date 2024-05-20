import { useRouter } from "next/router";
import React from "react";
import EcommerceCategories from "~/components/ecommerceCategories";
import EcommerceHeader from "~/components/ecommerceHeader";

const CategoriesPage: React.FC = () => {
  const router = useRouter();
  let user_id: string | string[] | undefined = router?.query.user_id ?? "";
  // console.log(email);

  // If `email` is `undefined` or an array, provide a default value or convert to string
  if (Array.isArray(user_id)) {
    user_id = user_id[0]; // or convert to string as per your requirement
  } else if (!user_id) {
    user_id = ""; // or provide a default value
  }
  return (
    <>
      <EcommerceHeader />
      <EcommerceCategories user_id={user_id!} />
    </>
  );
};

export default CategoriesPage;
