import React from "react";
import airplane from "../../assets/img/airplane.svg";
import solarShop from "../../assets/img/solarShop.svg";
import hospital from "../../assets/img/hospital.svg";
import bank from "../../assets/img/bank.svg";
import arena from "../../assets/img/arena.svg";
import teenyiconsSchool from "../../assets/img/teenyiconsSchool.svg";

export const AssistifyActivities = () => {
  const activities = [
    {
      img: airplane,
      title: "Transportation",
      description:
        "Get around airports, train stations, and bus terminals efficiently. Ideal for travelers to locate gates, ticket counters, and lounges",
    },
    {
      img: solarShop,
      title: "Shopping",
      description:
        "Navigate through shopping malls, retail stores, and complex marketplaces. Find your favorite shops, food courts, and facilities with ease",
    },
    {
      img: hospital,
      title: "Healthcare",
      description:
        "Navigate hospitals, clinics, and medical centers with ease. Ensure patients, visitors, and staff can quickly locate departments, wards, and emergency rooms.",
    },
    {
      img: bank,
      title: "Events & Conference",
      description:
        "Simplify your visit to convention centers, expo halls, and conference venues. Find sessions, booths, and networking areas effortlessly",
    },
    {
      img: arena,
      title: "Entertainment",
      description:
        "Enhance your experience at museums, theaters, and amusement parks. Seamlessly explore attractions, exhibits, and entertainment venues without getting lost",
    },
    {
      img: teenyiconsSchool,
      title: "Education",
      description:
        "Effortlessly find your way around campuses, libraries, and lecture halls. Perfect for students, faculty, and visitors to navigate large educational institutions",
    },
  ];
  return (
    <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-40 md:mb-[313px]">
      <h2 className="font-semibold text-3xl lg:text-5xl lg:leading-[60.48px]">
        Assistify will help you with many activities
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="md:min-w-[190px] md:min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
              <img src={activity.img} alt="teenyiconsSchool" />
            </div>
            <div className="flex flex-col gap-[15px]">
              <h4 className="font-bold text-[22.87px] leading-[42.86px]">
                {activity.title}
              </h4>
              <p className="text-base text-[#7B7A81] leading-[20px]">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
