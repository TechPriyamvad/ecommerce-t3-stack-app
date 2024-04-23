import React from "react";
import { TiTick } from "react-icons/ti";
const EcommerceCategories: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-row justify-center bg-white">
        <div className="bg-neutralwhite relative h-[900px] w-[1440px] overflow-hidden">
          <div className="absolute left-0 top-[900px] h-px w-[1440px] border border-dashed border-[#ff4444] opacity-10" />
          <div className="absolute left-[-711px] top-[10504px] h-[245px] w-[2523px] bg-[#d9d9d9]" />
          <div className="absolute left-[472px] top-[214px] h-[658px] w-[621px]">
            <div className="absolute left-0 top-[127px] h-px w-[496px] bg-neutral-200" />
            <div className="bg-neutralwhite absolute left-[45px] top-0 h-[658px] w-[576px] rounded-[20px] border border-solid border-[#c1c1c1]" />
            <div className="absolute left-[123px] top-[39px] text-center text-[32px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Inter-SemiBold',Helvetica]">
              Please mark your interests!
            </div>
            <p className="text-neutralblack absolute left-[237px] top-[101px] whitespace-nowrap text-[16px] font-normal leading-[26px] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
              We will keep you notified.
            </p>
            <div className="text-neutralblack absolute left-[105px] top-[164px] whitespace-nowrap text-[20px] font-medium leading-[26px] tracking-[0] [font-family:'Inter-Medium',Helvetica]">
              My saved interests!
            </div>
            <p className="absolute left-[105px] top-[559px] whitespace-nowrap text-[20px] font-medium leading-[26px] tracking-[0] text-transparent [font-family:'Inter-Medium',Helvetica]">
              <span className="text-[#ababab]">
                &lt;&lt;&nbsp;&nbsp;&lt;&nbsp;&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;
              </span>
              <span className="text-black">4</span>
              <span className="text-[#ababab]">
                &nbsp;&nbsp;5&nbsp;&nbsp;6&nbsp;&nbsp;7 ... &gt;&nbsp;&nbsp;
                &gt;&gt;
              </span>
            </p>
            <div className="text-neutralblack absolute left-[141px] top-[217px] whitespace-nowrap text-[16px] font-normal leading-[26px] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
              Shoes
            </div>
            <div className="text-neutralblack absolute left-[141px] top-[266px] whitespace-nowrap text-[16px] font-normal leading-[26px] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
              Men T-shirts
            </div>
            <div className="text-neutralblack absolute left-[141px] top-[315px] whitespace-nowrap text-[16px] font-normal leading-[26px] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
              Makeup
            </div>
            <div className="bg-neutralblack absolute left-[105px] top-[219px] h-[24px] w-[24px] rounded-[4px]">
              <TiTick className="!absolute !left-[5px] !top-[7px] !h-[10px] !w-[14px]" />
            </div>
            <div className="absolute left-[105px] top-[268px] h-[24px] w-[24px] rounded-[4px] bg-[#cccccc]" />
            <div className="bg-neutralblack absolute left-[105px] top-[317px] h-[24px] w-[24px] rounded-[4px]">
              <TiTick className="!absolute !left-[5px] !top-[7px] !h-[10px] !w-[14px]" />
            </div>
            <div className="text-neutralblack absolute left-[141px] top-[369px] whitespace-nowrap text-[16px] font-normal leading-[26px] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
              Jewellery
            </div>
            <div className="text-neutralblack absolute left-[141px] top-[418px] whitespace-nowrap text-[16px] font-normal leading-[26px] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
              Women T-shirts
            </div>
            <div className="text-neutralblack absolute left-[141px] top-[467px] whitespace-nowrap text-[16px] font-normal leading-[26px] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
              Furniture
            </div>
            <div className="bg-neutralblack absolute left-[105px] top-[371px] h-[24px] w-[24px] rounded-[4px]">
              <TiTick className="!absolute !left-[5px] !top-[7px] !h-[10px] !w-[14px]" />
            </div>
            <div className="absolute left-[105px] top-[420px] h-[24px] w-[24px] rounded-[4px] bg-[#cccccc]" />
            <div className="bg-neutralblack absolute left-[105px] top-[469px] h-[24px] w-[24px] rounded-[4px]">
              <TiTick className="!absolute !left-[5px] !top-[7px] !h-[10px] !w-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceCategories;
