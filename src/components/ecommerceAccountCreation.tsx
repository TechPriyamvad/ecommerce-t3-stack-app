import React, { useState } from "react";
import { api } from "~/utils/api";

const EcommerceAccountCreation: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupMutation = api.user.signUp.useMutation();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // console.log(name);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // console.log(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      signupMutation.mutate({name, email, password});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex w-full flex-row justify-center bg-white">
        <div className="bg-neutralwhite relative h-[900px] w-[1440px] overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="bg-neutralwhite absolute left-[432px] top-[176px] h-[691px] w-[576px] rounded-[20px] border border-solid border-[#c1c1c1]">
              <button className="all-[unset] bg-neutralblack absolute left-[59px] top-[436px] box-border flex h-[56px] w-[456px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] border border-solid border-black bg-black px-[148px] py-[18px]">
                <div className="relative ml-[-1.00px] mr-[-1.00px] mt-[-0.50px] w-fit whitespace-nowrap text-center text-[16px] font-medium leading-[normal] tracking-[1.12px] text-white [font-family:'Inter-Medium',Helvetica]">
                  CREATE ACCOUNT
                </div>
              </button>
              <div className="absolute left-[130px] top-[38px] text-[32px] font-semibold leading-[normal] tracking-[0] text-black [font-family:'Inter-SemiBold',Helvetica]">
                Create your account
              </div>
              <div className="absolute left-[60px] top-[111px] h-[74px] w-[460px]">
                <div className="absolute left-0 top-0 h-[74px] w-[460px]">
                  <div className="bg-neutralwhite absolute left-0 top-[26px] h-[48px] w-[456px] rounded-[6px] border border-solid border-[#c1c1c1]">
                    <input
                      className=" h-full w-full px-3 py-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Enter"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <label className="text-neutralblack absolute left-0 top-0 whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
                    Name
                  </label>
                </div>
              </div>
              <div className="absolute left-[59px] top-[216px] h-[74px] w-[460px]">
                <div className="bg-neutralwhite absolute left-0 top-[26px] h-[48px] w-[456px] rounded-[6px] border border-solid border-[#c1c1c1]">
                  <div className="absolute left-[15px] top-[14px] whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
                    <input
                      className=" h-full w-full px-3 py-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Enter"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <label className="text-neutralblack absolute left-0 top-0 whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
                  Email
                </label>
              </div>
              <div className="absolute left-[59px] top-[322px] h-[74px] w-[460px]">
                <div className="bg-neutralwhite absolute left-0 top-[26px] h-[48px] w-[456px] rounded-[6px] border border-solid border-[#c1c1c1]">
                  <div className="absolute left-[15px] top-[14px] whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0]  [font-family:'Inter-Regular',Helvetica]">
                    <input
                      className=" h-full w-full px-3 py-2 leading-tight focus:outline-none"
                      type="password"
                      placeholder="Enter"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <label className="text-neutralblack absolute left-0 top-0 whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0] [font-family:'Inter-Regular',Helvetica]">
                  Password
                </label>
              </div>
              <div className="absolute left-[185px] top-[540px] h-[19px] w-[206px]">
                <div className="absolute left-0 top-0 whitespace-nowrap text-[16px] font-normal leading-[normal] tracking-[0] text-neutral-500 [font-family:'Inter-Regular',Helvetica]">
                  Have an Account?
                </div>
                <div className="absolute left-[148px] top-0 h-[18px] w-[56px]">
                  <div className="text-neutralblack absolute -top-px left-0 whitespace-nowrap text-[16px] font-bold leading-[normal] tracking-[1.12px] [font-family:'Inter-Medium',Helvetica]">
                    LOGIN
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="absolute left-0 top-[900px] h-px w-[1440px] border border-dashed border-[rgb(255,68,68)] opacity-10" />
          <div className="absolute left-[-711px] top-[10504px] h-[245px] w-[2523px] bg-[#d9d9d9]" />
        </div>
      </div>
    </>
  );
};

export default EcommerceAccountCreation;
