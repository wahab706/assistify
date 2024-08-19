import React, { useState, useEffect } from "react";
import navigation from "../../assets/img/navigation.svg";
import mapping from "../../assets/img/mapping.svg";
import tracking from "../../assets/img/tracking.svg";
import safety from "../../assets/img/safety.svg";
import locationInfo from "../../assets/img/locationInfo.svg";
import translation from "../../assets/img/translation.svg";
import cardIllustrationTop from "../../assets/img/card-illustration-top.svg";
import cardIllustrationBottom from "../../assets/img/card-illustration-botm.svg";

export const AssistifyServices = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      img: navigation,
      title: "Indoor navigation",
      description:
        "Transform your building into interactive digital floor maps with effective search and guiding tools to help visitors find their way indoors",
    },
    {
      img: mapping,
      title: "Plan your trip",
      description:
        "Create interactive 2D and 3D digital indoor floor maps for your building, define points of interest, and connect them with the right routes.",
    },
    {
      img: tracking,
      title: "Talk to your AI",
      description:
        "Track assets and staff real-time and manage your resources efficiently. You can monitor, set alerts, and respond to incidents.",
    },
    {
      img: safety,
      title: "Safety & help",
      description:
        "Track assets and staff real-time and manage your resources efficiently. You can monitor, set alerts, and respond to incidents.",
    },
    {
      img: locationInfo,
      title: "Location info",
      description:
        "Use your camera to scan public landmarks for more insights or request instant location details.",
    },
    {
      img: translation,
      title: "Easy Translation",
      description:
        "Don't get lost in translation again. Easy translation for uploading documents, street boards/signs recognition, text prompts, or even voice.",
    },
  ];

  return (
    <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-24 md:mb-[195px]">
      <h2 className="font-semibold text-3xl lg:text-5xl lg:leading-[60.48px]">
        Assistify can help you with
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4 relative"
          >
            <img src={service.img} alt={service.title} className="mb-2" />
            {((index === 2 && windowWidth > 1024) ||
              (index === 1 && windowWidth > 768 && windowWidth < 1024)) && (
              <img
                src={cardIllustrationTop}
                alt="Card Illustration Top"
                className="absolute bottom-[81%] right-3 -z-10 hidden md:block"
              />
            )}
            {((index === 3 && windowWidth > 1024) ||
              (index === 4 && windowWidth > 768 && windowWidth < 1024)) && (
              <img
                src={cardIllustrationBottom}
                alt="Card Illustration Bottom"
                className={`hidden md:block absolute -z-10 ${
                  windowWidth > 1024 ? "top-[50%] -left-12" : "top-[60%] left-0"
                }`}
              />
            )}
            <h3 className="w-full text-start text-black font-semibold text-xl lg:text-[32px] lg:leading-[40.32px]">
              {service.title}
            </h3>
            <p className="font-light text-lg lg:text-xl lg:leading-[25.4px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
