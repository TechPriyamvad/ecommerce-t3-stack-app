import router from "next/router";
import React from "react";
import { api } from "~/utils/api";
// Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: [["user","verifyUser"],{"input":{"email":"priyamvadofficial1@gmail.com","verification_code":""},"type":"query"}]
interface EcommerceAccountVerificationProps {
  email: string;
}
const EcommerceAccountVerification: React.FC<
  EcommerceAccountVerificationProps
> = ({ email }) => {
  const [firstDigit, setFirstDigit] = React.useState<string>("");
  const [secondDigit, setSecondDigit] = React.useState<string>("");
  const [thirdDigit, setThirdDigit] = React.useState<string>("");
  const [fourthDigit, setFourthDigit] = React.useState<string>("");
  const [fifthDigit, setFifthDigit] = React.useState<string>("");
  const [sixthDigit, setSixthDigit] = React.useState<string>("");
  const [seventhDigit, setSeventhDigit] = React.useState<string>("");
  const [eigthDigit, setEigthDigit] = React.useState<string>("");
  const [verification_code, setVerificationCode] = React.useState<string>("");

  // find user by email and verification code
  const verifyUserMutation = api.user.verifyUser.useMutation();
  // const {isSuccess,mutateAsync} = api.user.verifyUser.useMutation();
  
  const handleFirstDigitChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFirstDigit(event.target.value);

  const handleSecondDigitChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setSecondDigit(event.target.value);

  const handleThirdDigitChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setThirdDigit(event.target.value);

  const handleFourthDigitChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setFourthDigit(event.target.value);

  const handleFifthDigitChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFifthDigit(event.target.value);

  const handleSixthDigitChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSixthDigit(event.target.value);

  const handleSeventhDigitChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => setSeventhDigit(event.target.value);

  const handleEigthDigitChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEigthDigit(event.target.value);

  const verifyUser = async(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const verification_code = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}${sixthDigit}${seventhDigit}${eigthDigit}`.trim();
    try {
      setVerificationCode(verification_code);
      // console.log(verification_code);
      await verifyUserMutation.mutateAsync({ email,verification_code});
      await router.push(`/categories`);
    } catch (error:unknown) {
      if(typeof error === 'object' && error !== null)
        alert((error as {message:string}).message);
    }
  };

  // console.log(email);

  return (
    <div>
      <div className="flex w-full flex-row justify-center bg-white">
        <div className="bg-neutralwhite relative h-[900px] w-[1440px] overflow-hidden">
          <div className="absolute left-0 top-[900px] h-px w-[1440px] border border-dashed border-[#ff4444] opacity-10" />
          <div className="absolute left-[-711px] top-[10504px] h-[245px] w-[2523px] bg-[#d9d9d9]" />
          <div className="bg-neutralwhite absolute left-[432px] top-[176px] h-[453px] w-[576px] rounded-[20px] border border-solid border-[#c1c1c1]">
            <button
              className="all-[unset] absolute left-[59px] top-[336px] box-border flex h-[56px] w-[456px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] border border-solid border-black bg-black px-[148px] py-[18px]"
              onClick={verifyUser}
            >
              <div className="relative mt-[-0.50px] w-fit whitespace-nowrap text-center text-[16px] font-medium leading-[normal] tracking-[1.12px] text-white [font-family:'Inter-Medium',Helvetica]">
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
                  {email?.slice(0, 3)}***@gmail.com
                </span>
              </p>
            </div>
            <div className="absolute left-[61px] top-[198px] h-[74px] w-[454px]">
              <input
                className="bg-neutralwhite absolute left-0 top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1] text-center"
                type="text"
                value={firstDigit}
                onChange={handleFirstDigitChange}
                maxLength={1}
              />
              <input
                className="bg-neutralwhite absolute left-[58px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1] text-center"
                type="text"
                value={secondDigit}
                onChange={handleSecondDigitChange}
                maxLength={1}
              />
              <input
                className="bg-neutralwhite absolute left-[116px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1] text-center"
                type="text"
                value={thirdDigit}
                onChange={handleThirdDigitChange}
                maxLength={1}
              />
              <input
                className="bg-neutralwhite absolute left-[174px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1] text-center"
                type="text"
                value={fourthDigit}
                onChange={handleFourthDigitChange}
                maxLength={1}
              />
              <input
                className="bg-neutralwhite absolute left-[232px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1] text-center"
                type="text"
                value={fifthDigit}
                onChange={handleFifthDigitChange}
                maxLength={1}
              />
              <input
                className="bg-neutralwhite absolute left-[290px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1] text-center"
                type="text"
                value={sixthDigit}
                onChange={handleSixthDigitChange}
                maxLength={1}
              />
              <input
                className="bg-neutralwhite absolute left-[348px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1] text-center"
                type="text"
                value={seventhDigit}
                onChange={handleSeventhDigitChange}
                maxLength={1}
              />
              <input
                className="bg-neutralwhite absolute left-[406px] top-[26px] h-[48px] w-[46px] rounded-[6px] border border-solid border-[#c1c1c1] text-center"
                type="text"
                value={eigthDigit}
                onChange={handleEigthDigitChange}
                maxLength={1}
              />
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
