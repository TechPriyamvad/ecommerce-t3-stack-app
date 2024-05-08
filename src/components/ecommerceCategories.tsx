import React from "react";
import { api } from "~/utils/api";

const EcommerceCategories: React.FC = () => {
  const {data:categories,isLoading,error} = api.category.fetchCategories.useQuery({page:1});
  
  // console.log('categories: ',categories);
  if (isLoading) {
    // Handle the case when categories data is still loading
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  if(error) return <div className="flex justify-center items-center h-screen">Error:{error.message}</div>;

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
              {categories?.map((category) => (
                <li key={category.id} className="mb-3 text-black font-medium space-x-2">
                  <input type="checkbox" checked={category.isSelected} className="bg-black"/>
                  <span>{category.name}</span>
                </li>
              ))}
            </ul>
          </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceCategories;
