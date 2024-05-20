import router from "next/router";
import React, { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingCart, LuLogOut } from "react-icons/lu";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const EcommerceHeader: React.FC = () => {
  const [logout, setLogout] = React.useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    token ? setLogout(true) : setLogout(false);
  }, [logout]);

  async function handleLogout(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    console.log("Logging out");
    event.preventDefault();
    localStorage.removeItem("jwtToken");
    await router.push("/login");
    setLogout(false);
  }

  return (
    <>
      <div className="bg-neutralwhite absolute left-0 top-0 h-[100px] w-[1440px]">
        <div className="text-neutralblack absolute left-[614px] top-[58px] whitespace-nowrap text-[16px] font-semibold leading-[normal] tracking-[0] [font-family:'Inter-SemiBold',Helvetica]">
          Sale
        </div>
        <div className="text-neutralblack absolute left-[791px] top-[58px] whitespace-nowrap text-[16px] font-semibold leading-[normal] tracking-[0] [font-family:'Inter-SemiBold',Helvetica]">
          New stock
        </div>
        <div className="text-neutralblack absolute left-[680px] top-[58px] whitespace-nowrap text-[16px] font-semibold leading-[normal] tracking-[0] [font-family:'Inter-SemiBold',Helvetica]">
          Clearance
        </div>
        <div className="text-neutralblack absolute left-[496px] top-[58px] whitespace-nowrap text-[16px] font-semibold leading-[normal] tracking-[0] [font-family:'Inter-SemiBold',Helvetica]">
          Categories
        </div>
        <div className="text-neutralblack absolute left-[905px] top-[58px] whitespace-nowrap text-[16px] font-semibold leading-[normal] tracking-[0] [font-family:'Inter-SemiBold',Helvetica]">
          Trending
        </div>
        <div className="text-neutralblack absolute left-[40px] top-[42px] text-[32px] font-bold leading-[normal] tracking-[0] [font-family:'Inter-Bold',Helvetica]">
          ECOMMERCE
        </div>
        <IoIosSearch className="!absolute !left-[1200px] !top-[52px] !h-[32px] !w-[32px]" />
        <LuShoppingCart className="!absolute !left-[1280px] !top-[52px] !h-[32px] !w-[32px]" />
        {logout && (
          <div className="!relative z-10">
            <button
              onClick={handleLogout}
              className="!absolute !left-[1350px] !top-[55px] flex flex-row items-center text-[16px]"
            >
              <LuLogOut className="pointer-events-none" />
              <span className="pointer-events-none ml-2">Logout</span>
            </button>
          </div>
        )}
        <div className="absolute left-[1368px] top-[52px] h-[32px] w-[32px]">
          <div className="relative left-[5px] top-[6px] h-[20px] w-[22px] bg-[url(/vector.svg)] bg-[100%_100%]" />
        </div>
        <div className="bg-neutralwhite absolute left-0 top-0 h-[36px] w-[1440px]">
          <div className="relative left-[1176px] top-[12px] flex w-[224px] items-center justify-end gap-[20px]">
            <div className="relative h-[13px] w-[27px]">
              <div className="absolute -top-px left-0 text-[12px] font-normal leading-[normal] tracking-[0] text-neutral-500 [font-family:'Inter-Regular',Helvetica]">
                Help
              </div>
            </div>
            <div className="relative h-[13px] w-[97px]">
              <div className="absolute -top-px left-0 text-[12px] font-normal leading-[normal] tracking-[0] text-neutral-500 [font-family:'Inter-Regular',Helvetica]">
                Orders &amp; Returns
              </div>
            </div>
            <div className="relative w-[46px] self-stretch">
              <div className="absolute -left-px -top-px text-right text-[12px] font-normal leading-[normal] tracking-[0] text-neutral-500 [font-family:'Inter-Regular',Helvetica]">
                Hi, John
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[100px] h-[36px] w-full bg-neutral-100">
        <div className="relative left-[575px] top-[10px] h-[18px] w-[292px]">
          <SlArrowLeft className="!absolute !left-0 !top-0 !h-[16px] !w-[16px]" />
          <SlArrowRight className="!absolute !left-[274px] !top-0 !h-[16px] !w-[16px]" />
          <p className="text-neutralblack absolute left-[40px] top-px text-[14px] font-medium leading-[normal] tracking-[0] [font-family:'Inter-Medium',Helvetica]">
            Get 10% off on business sign up
          </p>
        </div>
      </div>
    </>
  );
};

export default EcommerceHeader;
