import React from "react";
import leadsClientsIllust from "../../assets/img/leads-clients-illust.svg";
import GroupMobile from "../../assets/img/GroupMobile.png";
import smGroupMobile from "../../assets/img/smGroupMobile.png";

export const AdvancedNavigation = () => {
  return (
    <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-40 md:mb-[313px]">
      <h2 className="font-semibold text-3xl lg:text-5xl lg:leading-[90px]">
        Navigate large indoor spaces effortlessly with our advanced indoor
        navigation system{" "}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-3 xl:gap-[20px]">
        <div className="order-2 lg:order-1 lg:col-span-3 xl:col-span-4 flex flex-col gap-20 lg:gap-10 xl:gap-[95.25px]">
          <div className="flex flex-col gap-4">
            <h3 className="text-black font-semibold text-xl lg:text-[32px] lg:leading-[50.78px]">
              Real-Time Navigation Insights
            </h3>
            <p className="font-light text-lg lg:text-xl lg:leading-[31.74px] text-[#5E5E5E]">
              Get detailed navigation information with ETA, distance, and
              directional guidance at a glance
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-black font-semibold text-xl lg:text-[32px] lg:leading-[50.78px]">
              Enable GPS and Camera
            </h3>
            <p className="font-light text-lg lg:text-xl lg:leading-[31.74px] text-[#5E5E5E]">
              Ensure GPS and camera access for accurate positioning and enhanced
              navigation features
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-black font-semibold text-xl lg:text-[32px] lg:leading-[50.78px]">
              Interactive AR Route Guidance
            </h3>
            <p className="font-light text-lg lg:text-xl lg:leading-[31.74px] text-[#5E5E5E]">
              Experience route guidance with AR: visualize your path through
              your camera or switch to map view
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-9 xl:col-span-8 pt-20 lg:mt-0">
          <img
            src={smGroupMobile}
            alt="smGroupMobile"
            className="lg:hidden mx-auto"
          />
          <div className="lg:grid lg:grid-cols-12 lg:gap-5 xl:gap-[50px] hidden">
            <div className="col-span-7 md:col-span-9 relative">
              <img src={GroupMobile} alt="GroupMobile" />
              <img
                src={leadsClientsIllust}
                alt="leadsClientsIllust"
                className="absolute bottom-[56.4%] -z-10 hidden lg:block"
              />
            </div>
            <div className="col-span-5 md:col-span-3 flex flex-col gap-8 md:gap-[96px] lg:gap-12 xl:gap-[96px] items-end">
              <div className="bg-white text-xl border border-[#87C446] border-dotted p-5 flex justify-center items-center w-full h-full max-w-[183px] max-h-[171px] rounded-[20px] text-center card-border relative">
                Switch places
              </div>
              <div className="bg-white text-xl border border-[#87C446] border-dotted p-5 flex justify-center items-center w-full h-full max-w-[183px] max-h-[171px] rounded-[20px] text-center card-border relative">
                Keep your phone’s camera/GPS on
              </div>
              <div className="bg-white text-xl border border-[#87C446] border-dotted p-5 flex justify-center items-center w-full h-full max-w-[183px] max-h-[171px] rounded-[20px] text-center card-border relative">
                See navigation details
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
