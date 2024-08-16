import React from "react";
import phone from "../../assets/img/phone.svg";
import googleplay from "../../assets/img/googleplay.svg";
import appstore from "../../assets/img/appstore.svg";

export const GetAssistify = () => {
  return (
    <div className="max-w-[1120px] mx-auto bg-white py-7.5 px-5 border border-[#EDEDED] rounded-[20px]">
      <div className="max-w-[747.19px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center lg:gap-[70px]">
        <div className="col-span-8">
          <div className="flex flex-col gap-4 max-w-[355px]">
            <h3 className="text-3xl lg:text-5xl font-semibold lg:leading-[90px]">
              Get Assistify now
            </h3>
            <p className="font-light text-xl text-[#6E6E6E]">
              Get your questions answered, on your phone now.
            </p>
          </div>
          <div className="flex justify-between xs:justify-start gap-3 xs:gap-[17px] items-center flex-wrap mt-16">
            <a href="" target="_blank">
              <img
                src={googleplay}
                alt="googleplay"
                className="w-[144px] xs:w-[204px]"
              />
            </a>
            <a href="" target="_blank">
              <img
                src={appstore}
                alt="appstore"
                className="w-[144px] xs:w-[204px]"
              />
            </a>
          </div>
        </div>
        <div className="col-span-4 hidden md:block">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
};
