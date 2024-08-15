import React from "react";
import teenyiconsSchool from "../assets/img/teenyiconsSchool.png";
import arena from "../assets/img/arena.png";
import bank from "../assets/img/bank.png";
import hospital from "../assets/img/hospital.png";
import solarShop from "../assets/img/solarShop.png";
import airplane from "../assets/img/airplane.png";

export const AssistifyActivities = () => {
  return (
    <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-40 md:mb-[313px]">
      <h2 className="font-semibold text-3xl lg:text-5xl lg:leading-[60.48px]">
        Assistify will help you with many activities
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex flex-col md:flex-row gap-10 items-center">
          <div className="md:min-w-[190px] md:min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
            <img src={airplane} alt="teenyiconsSchool" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <h4 className="font-bold text-[22.87px] leading-[42.86px]">
              Transportation
            </h4>
            <p className="text-base text-[#7B7A81] leading-[20px]">
              Get around airports, train stations, and bus terminals
              efficiently. Ideal for travelers to locate gates, ticket counters,
              and lounges
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex flex-col md:flex-row gap-10 items-center">
          <div className="md:min-w-[190px] md:min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
            <img src={solarShop} alt="teenyiconsSchool" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <h4 className="font-bold text-[22.87px] leading-[42.86px]">
              Shopping
            </h4>
            <p className="text-base text-[#7B7A81] leading-[20px]">
              Navigate through shopping malls, retail stores, and complex
              marketplaces. Find your favorite shops, food courts, and
              facilities with ease
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex flex-col md:flex-row gap-10 items-center">
          <div className="md:min-w-[190px] md:min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
            <img src={hospital} alt="teenyiconsSchool" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <h4 className="font-bold text-[22.87px] leading-[42.86px]">
              Healthcare
            </h4>
            <p className="text-base text-[#7B7A81] leading-[20px]">
              Navigate hospitals, clinics, and medical centers with ease. Ensure
              patients, visitors, and staff can quickly locate departments,
              wards, and emergency rooms.
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex flex-col md:flex-row gap-10 items-center">
          <div className="md:min-w-[190px] md:min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
            <img src={bank} alt="teenyiconsSchool" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <h4 className="font-bold text-[22.87px] leading-[42.86px]">
              Events & Conference
            </h4>
            <p className="text-base text-[#7B7A81] leading-[20px]">
              Simplify your visit to convention centers, expo halls, and
              conference venues. Find sessions, booths, and networking areas
              effortlessly
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex flex-col md:flex-row gap-10 items-center">
          <div className="md:min-w-[190px] md:min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
            <img src={arena} alt="teenyiconsSchool" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <h4 className="font-bold text-[22.87px] leading-[42.86px]">
              Entertainment
            </h4>
            <p className="text-base text-[#7B7A81] leading-[20px]">
              Enhance your experience at museums, theaters, and amusement parks.
              Seamlessly explore attractions, exhibits, and entertainment venues
              without getting lost
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex flex-col md:flex-row gap-10 items-center">
          <div className="md:min-w-[190px] md:min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
            <img src={teenyiconsSchool} alt="teenyiconsSchool" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <h4 className="font-bold text-[22.87px] leading-[42.86px]">
              Education
            </h4>
            <p className="text-base text-[#7B7A81] leading-[20px]">
              Effortlessly find your way around campuses, libraries, and lecture
              halls. Perfect for students, faculty, and visitors to navigate
              large educational institutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
