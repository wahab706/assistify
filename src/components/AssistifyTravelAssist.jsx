import React from "react";
import publicBuilding from "../assets/img/publicBuilding.png";
import companionAnytime from "../assets/img/companionAnytime.png";
import arLandmark from "../assets/img/arLandmark.png";
import dotGrid from "../assets/img/dotGrid.svg";
import safetyPhone from "../assets/img/safetyPhone.png";
import travelExpHillustration from "../assets/img/travelExp-hillustration.svg";
import travelExpIllustration from "../assets/img/travelExp-illustration.svg";
export const AssistifyTravelAssist = () => {
  return (
    <div className="relative">
      <img
        src={travelExpIllustration}
        alt="travelExp-illustration"
        className="absolute bottom-[14%] -left-8.5 hidden lg:block"
      />
      <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-40 md:mb-[313px]">
        <h2 className="font-semibold text-3xl lg:text-5xl lg:leading-[60.48px] relative">
          Assistify can guide you in every way possible, regardless of your
          travel experience
          <img
            src={travelExpHillustration}
            alt="travelExp-hillustration"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
          />
        </h2>
        <div className="flex flex-col gap-32 sm:gap-24">
          <div className="flex flex-col sm:flex-row items-center justify-between relative gap-14 lg:gap-2">
            <div>
              <img src={publicBuilding} alt="publicBuilding" />
            </div>
            <div className="flex-grow max-w-[760px] ms-auto">
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-semibold leading-[57px] max-w-[546px]">
                  Get help when you are inside a public building
                </h3>
                <p className="text-xl text-[#5E5E5E] max-w-[457px]">
                  Transform your building into interactive digital floor maps
                  with effective search and guiding tools to help visitors find
                  their way indoors
                </p>
              </div>
            </div>
            <img
              src={dotGrid}
              alt="dotGrid"
              className="absolute right-0 bottom-0 hidden lg:block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between relative gap-14 lg:gap-2">
            <div className="flex-grow max-w-[760px] order-2 sm:order-1">
              <div className="flex flex-col gap-4 lg:items-end">
                <h3 className="text-4xl font-semibold leading-[57px] max-w-[546px]">
                  Talk to your companion anytime
                </h3>
                <p className="text-xl text-[#5E5E5E] max-w-[457px]">
                  Your companion is at your pocket, get help instantly and more
                  accurately just tell you Assistify what to do and get AI
                  response in more contextual manner to your trip or even switch
                  to chat mode
                </p>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <img
                src={companionAnytime}
                alt="companionAnytime"
                className="w-[228.52px]"
              />
            </div>
            <img
              src={dotGrid}
              alt="dotGrid"
              className="absolute left-0 bottom-10 hidden lg:block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between relative gap-14 lg:gap-2">
            <div>
              <img src={arLandmark} alt="publicBuilding" />
            </div>
            <div className="flex-grow max-w-[840px] ms-auto">
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-semibold leading-[57px] max-w-[550px] xl:max-w-[634px]">
                  Use AR to scan landmarks or objects and get real-time insights
                  and information
                </h3>
                <p className="text-xl text-[#5E5E5E] max-w-[457px]">
                  Identify places around you and also get AI generated quick
                  information response about the landmark
                </p>
              </div>
            </div>
            <img
              src={dotGrid}
              alt="dotGrid"
              className="absolute right-0 bottom-0 hidden lg:block"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between relative gap-14 lg:gap-2">
            <div className="flex-grow max-w-[760px] order-2 sm:order-1">
              <div className="flex flex-col gap-4 lg:items-end max-w-[634px]">
                <h3 className="text-4xl font-semibold leading-[57px] max-w-[457px] w-full">
                  Safety is top priority
                </h3>
                <p className="text-xl text-[#5E5E5E] max-w-[457px]">
                  Get quick access reaching to emergency numbers or common pubic
                  services contact details and SOS feature to help you get
                  instant help
                </p>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <img
                src={safetyPhone}
                alt="companionAnytime"
                className="w-[228.52px]"
              />
            </div>
          </div>
          <div className="text-[32px] leading-[60px] text-center">
            And much more ...
          </div>
        </div>
      </div>
    </div>
  );
};
