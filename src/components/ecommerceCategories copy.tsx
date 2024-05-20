import React, { useEffect, useState } from "react";
import { api, setToken } from "~/utils/api";
import { Pagination } from "@nextui-org/pagination";
import { ITEMS_PER_PAGE } from "constants/clientConstants";
import router from "next/router";

interface EcommerceCategoriesProps {
  user_id: number
}

const EcommerceCategories: React.FC<EcommerceCategoriesProps> = ({user_id}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [categorySelection, setCategorySelection] = React.useState<
    Record<number, boolean>
  >({});

  const {data:categoryData,isPending,isError,error,mutateAsync} = api.category.fetchCategories.useMutation();

  const updateCategoryMutation =
    api.category.updateCategorySelection.useMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) await router.push("/login");
        else {
          console.log(categorySelection);
          setToken(token);
          await mutateAsync({
            page: currentPage,
          });
        }
      } catch (error) {
        if (error) {
          localStorage.removeItem("jwtToken");
          await router.push("/login");
        }
        console.error(error);
      }
    };
    void fetchData();
  }, [currentPage,mutateAsync]);

  useEffect(() => {
    // Initialize category selection based on category data
    if (categoryData) {
      const initialSelection = categoryData.reduce<Record<number, boolean>>(
        (acc, category) => {
          acc[category.id] = category.isSelected;
          return acc;
        },
        {},
      );
      setCategorySelection(initialSelection);
    }
  }, [categoryData]);

  // console.log('categories: ',categories);
  if (isPending) {
    // Handle the case when categories data is still loading
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }
  if (isError)
    return (
      <div className="flex h-screen items-center justify-center">
        Error:{error?.message}
      </div>
    );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategorySelection = async (
    categoryId: number,
    isSelected: boolean,
  ) => {
    try {
      const updatedCategory = await updateCategoryMutation.mutateAsync({
        id: categoryId,
        isSelected,
      });
      console.log(updatedCategory);
      setCategorySelection((prevSelection) => ({
        ...prevSelection,
        [categoryId]: isSelected,
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <>
      <div className="flex w-full flex-row justify-center bg-white">
        <div className="bg-neutralwhite relative h-[900px] w-[1440px] overflow-hidden">
          <div className="absolute left-0 top-[900px] h-px w-[1440px] border border-dashed border-[#ff4444] opacity-10" />
          <div className="absolute left-[-711px] top-[10504px] h-[245px] w-[2523px] bg-[#d9d9d9]" />
          <div className="absolute left-[472px] top-[214px] h-[658px] w-[621px]">
            <div className="absolute left-0 top-[127px] h-px w-[496px]" />
            <div className="bg-neutralwhite absolute left-[45px] top-0 h-[658px] w-[576px] rounded-[20px] border border-solid border-[#c1c1c1]" />
            <div className="absolute left-[123px] top-[39px] text-center text-[32px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Inter-SemiBold',Helvetica]">
              Please mark your interests!
            </div>
            <p className="text-neutralblack absolute left-[237px] top-[101px] whitespace-nowrap text-[16px] font-normal leading-[26px] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
              We will keep you notified.
            </p>
            <div className="text-neutralblack absolute left-[105px] top-[164px] whitespace-nowrap text-[20px] font-bold leading-[26px] tracking-[0] [font-family:'Inter-Medium',Helvetica]">
              My saved interests!
            </div>
            <div className="text-neutralblack absolute left-[105px] top-[220px] whitespace-nowrap text-[16px] font-medium leading-[26px] tracking-[0] [font-family:'Inter-Medium',Helvetica]">
              <ul>
                {categoryData?.map((category) => (
                  <li
                    key={category?.id}
                    className="mb-3 space-x-2 font-medium text-black"
                  >
                    <input
                      type="checkbox"
                      checked={categorySelection[category?.id] ?? false}
                      onChange={(e) =>
                        handleCategorySelection(category?.id, e.target.checked)
                      }
                    />
                    <span>{category?.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute left-[105px] top-[500px] leading-[26px] [font-family:'Inter-Medium',Helvetica]">
              <Pagination
                total={ITEMS_PER_PAGE} // Total number of pages
                initialPage={currentPage}
                onChange={handlePageChange}
                showControls={true}
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceCategories;
