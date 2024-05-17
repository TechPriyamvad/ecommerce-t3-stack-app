import router from "next/router";
import React, { useState } from "react";

const EcommerceLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add yEcommerceour n logic here
  };

  const handleShowPassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const redirectToSignupPage = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    try {
      event.preventDefault();
      await router.push("/signup");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <div className="flex w-full flex-row justify-center bg-white">
        <div className="bg-neutralwhite relative h-[1081px] w-[1440px] overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="bg-neutralwhite absolute left-[432px] top-[176px] h-[614px] w-[576px] rounded-[20px] border border-solid border-[#c1c1c1]">
              <div className="absolute left-[244px] top-[38px] text-[32px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Inter-SemiBold',Helvetica]">
                Login
              </div>
              <div className="absolute left-[59px] top-[206px] h-[74px] w-[460px]">
                <div className="absolute left-0 top-0 h-[74px] w-[460px]">
                  <input
                    type="text"
                    placeholder="Enter"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-neutralwhite absolute left-0 top-[26px] h-[48px] w-[456px] rounded-[6px] border border-solid border-[#c1c1c1] px-3"
                  />
                </div>
                <label className="absolute left-0 top-0 whitespace-nowrap text-[16px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
                  Email
                </label>
              </div>
              <div className="absolute left-[60px] top-[313px] h-[74px] w-[460px]">
                <div className="absolute left-0 top-0 h-[74px] w-[460px]">
                  <input
                    type={showPassword ? "test" : "password"}
                    placeholder="Enter"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-neutralwhite absolute left-0 top-[26px] h-[48px] w-[456px] rounded-[6px] border border-solid border-[#c1c1c1] px-3"
                  />
                  <label className="absolute left-0 top-0 whitespace-nowrap text-[16px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
                    Password
                  </label>
                </div>
                <div className="absolute left-[400px] top-[41px] h-[19px] w-[44px]">
                  <div className="relative h-[19px] w-[42px]">
                    <button
                      onClick={handleShowPassword}
                      className="absolute left-0 top-0 whitespace-nowrap text-[16px] font-medium leading-[normal] tracking-[0] text-black underline [font-family:'Inter-Regular',Helvetica]"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                    <div className="bg-neutralblack absolute left-0 top-[18px] h-px w-[42px] rounded-[3px]" />
                  </div>
                </div>
              </div>
              <div className="absolute left-[135px] top-[113px] text-[24px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Inter-Medium',Helvetica]">
                Welcome back to ECOMMERCE
              </div>
              <p className="absolute left-[155px] top-[155px] whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]">
                The next gen business marketplace
              </p>
              <div className="absolute left-[59px] top-[511px] h-px w-[456px] bg-neutral-300" />
              <div className="absolute left-[144px] top-[543px] h-[19px] w-[263px]">
                <div className="absolute left-0 top-0 whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0] text-neutral-500 [font-family:'Inter-Regular',Helvetica]">
                  Don’t have an Account?
                </div>
                <div className="absolute left-[189px] top-0 h-[18px] w-[72px]">
                  <button
                    onClick={redirectToSignupPage}
                    className="absolute -top-px left-0 whitespace-nowrap text-[16px] font-bold leading-[normal] tracking-[1.12px] text-black [font-family:'Inter-Medium',Helvetica]"
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
              <button className="all-[unset] bg-neutralblack absolute left-[59px] top-[426px] box-border flex h-[56px] w-[456px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] border border-solid border-black bg-black px-[148px] py-[18px]">
                <div className="relative mt-[-0.50px] w-fit whitespace-nowrap text-center text-[16px] font-medium leading-[normal] tracking-[1.12px] text-white [font-family:'Inter-Medium',Helvetica]">
                  LOGIN
                </div>
              </button>
            </div>
          </form>
          <div className="absolute left-0 top-[900px] h-px w-[1440px] border border-dashed border-[#ff4444] opacity-10" />
          <div className="absolute left-[-711px] top-[10504px] h-[245px] w-[2523px] bg-[#d9d9d9]" />
        </div>
      </div>
    </div>
  );
};

export default EcommerceLogin;
