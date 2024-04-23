import React from "react";

const EcommerceAccountVerification: React.FC = () => {
  return (
    <div>
      <div className="flex w-full flex-row justify-center bg-white">
        <div className="bg-neutralwhite relative h-[900px] w-[1440px] overflow-hidden">
          <div className="absolute left-0 top-[900px] h-px w-[1440px] border border-dashed border-[#ff4444] opacity-10" />
          <div className="absolute left-[-711px] top-[10504px] h-[245px] w-[2523px] bg-[#d9d9d9]" />
          <div className="bg-neutralwhite absolute left-[432px] top-[176px] h-[453px] w-[576px] rounded-[20px] border border-solid border-[#c1c1c1]">
            <button className="all-[unset] bg-black absolute left-[59px] top-[336px] box-border flex h-[56px] w-[456px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] border border-solid border-black px-[148px] py-[18px]">
              <div className="text-white relative mt-[-0.50px] w-fit whitespace-nowrap text-center text-[16px] font-medium leading-[normal] tracking-[1.12px] [font-family:'Inter-Medium',Helvetica]">
                VERIFY
              </div>
            </button>
            <div className="absolute left-[157px] top-[38px] text-[32px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Inter-SemiBold',Helvetica]">
              Verify your email
            </div>
            <div className="absolute left-[120px] top-[109px] flex h-[42px] w-[334px] flex-col items-start gap-[4px]">
              <p className="text-neutralblack relative self-stretch text-center text-[16px] font-normal leading-[normal] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
                <span className="text-[16px] font-normal tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
                  Enter the 8 digit code you have received on <br />
                </span>
              </p>
              <p className="text-neutralblack relative self-stretch text-center text-[16px] font-normal leading-[normal] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
                <span className="font-bold [font-family:'Inter-Medium',Helvetica]">
                  swa***@gmail.com
                </span>
              </p>
            </div>
            <div className="absolute left-[61px] top-[198px] h-[74px] w-[454px]">
              <div className="bg-neutralwhite absolute left-0 top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1]" />
              <div className="bg-neutralwhite absolute left-[58px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1]" />
              <div className="bg-neutralwhite absolute left-[116px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1]" />
              <div className="bg-neutralwhite absolute left-[174px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1]" />
              <div className="bg-neutralwhite absolute left-[232px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1]" />
              <div className="bg-neutralwhite absolute left-[290px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1]" />
              <div className="bg-neutralwhite absolute left-[348px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1]" />
              <div className="bg-neutralwhite absolute left-[406px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1]" />
              <div className="text-neutralblack absolute left-0 top-0 whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
                Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceAccountVerification;
