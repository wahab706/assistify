import React, { Fragment } from "react";
import { Button } from "../components/Button";
import mobile from "../assets/img/mobile.png";
import navigation from "../assets/img/navigation.svg";
import mapping from "../assets/img/mapping.svg";
import tracking from "../assets/img/tracking.svg";
import cardIllustrationTop from "../assets/img/card-illustration-top.svg";
import cardIllustrationBottom from "../assets/img/card-illustration-botm.svg";
import leadsClientsIllust from "../assets/img/leads-clients-illust.svg";
import GroupMobile from "../assets/img/GroupMobile.png";
export const Landing = () => {
  return (
    <Fragment>
      <div className="max-w-[1370px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-[1120px] mx-auto gap-14 mb-[195px]">
          <div className="flex flex-col gap-6 col-span-7">
            <h3 className="text-[#000] font-semibold text-[64px] leading-[80.64px]">
              Navigate your way using your camera{" "}
            </h3>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#000] font-semibold text-2xl">
                indoor navigation made easy.
              </h4>
              <p className="text-gray-medium font-medium text-base leading-[19.36px]">
                Make your journey easy & straightforward with Assistfy’s AR
                capabilities when you are in Shopping Malls, SmartVenus. Use
                your phone camera and follow route suggestions{" "}
              </p>
            </div>
            <div className="flex gap-6 flex-wrap">
              <Button primary className="!font-medium">
                Contact us
              </Button>
              <Button outlined>
                {" "}
                <span>Learn more</span>
              </Button>
            </div>
          </div>
          <div className="col-span-5 flex justify-center items-center relative mobile-pic pb-28 pt-7">
            <img src={mobile} alt="mobile" width={254} />
          </div>
        </div>
        <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-[195px]">
          <h2 className="font-semibold text-5xl leading-[60.48px]">
            Assistify can help you with
          </h2>
          <div className="grid grid-cols-3 gap-[50px]">
            <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4 relative card-after">
              <img src={navigation} alt="navigation" className="mb-2" />
              <img
                src={cardIllustrationBottom}
                alt="cardIllustrationBottom"
                className="absolute top-[60%] left-10 -z-10"
              />
              <h3 className="text-black font-semibold text-[32px] leading-[40.32px]">
                Indoor navigation
              </h3>
              <p className="text-xl leading-[25.4px]">
                Transform your building into interactive digital floor maps with
                effective search and guiding tools to help visitors find their
                way indoors
              </p>
            </div>
            <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4">
              <img src={mapping} alt="mapping" className="mb-2" />
              <h3 className="text-black font-semibold text-[32px] leading-[40.32px]">
                Digital mapping
              </h3>
              <p className="text-xl leading-[25.4px]">
                Create interactive 2D and 3D digital indoor floor maps for your
                building, define points of interest, and connect them with the
                right routes.
              </p>
            </div>
            <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4 relative">
              <img src={tracking} alt="tracking" />
              <img
                src={cardIllustrationTop}
                alt="cardIllustrationTop"
                className="absolute bottom-[60%] right-10 -z-10"
              />
              <h3 className="text-black font-semibold text-[32px] leading-[40.32px]">
                Realtime tracking
              </h3>
              <p className="text-xl leading-[25.4px]">
                Track assets and staff real time and manage your resources
                efficiently. You can monitor, set alerts, and response to
                incidents
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[18.5px] max-w-[1120px] mx-auto mb-[195px]">
          <h2 className="font-semibold text-5xl leading-[60.48px]">
            How Assistify leads clients
          </h2>
          <div className="grid grid-cols-12 gap-[50px]">
            <div className="col-span-4 flex flex-col gap-[96px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-black font-semibold text-[32px] leading-[40.32px]">
                  Real-Time Navigation Insights
                </h3>
                <p className="text-xl leading-[25.4px] text-[#5E5E5E]">
                  Get detailed navigation information with ETA, distance, and
                  directional guidance at a glance
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-black font-semibold text-[32px] leading-[40.32px]">
                  Enable GPS and Camera
                </h3>
                <p className="text-xl leading-[25.4px] text-[#5E5E5E]">
                  Ensure GPS and camera access for accurate positioning and
                  enhanced navigation features
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-black font-semibold text-[32px] leading-[40.32px]">
                  Interactive AR Route Guidance
                </h3>
                <p className="text-xl leading-[25.4px] text-[#5E5E5E]">
                  Experience route guidance with AR: visualize your path through
                  your camera or switch to map view
                </p>
              </div>
            </div>
            <div className="col-span-6 relative">
              <img src={GroupMobile} alt="GroupMobile" />
              <img
                src={leadsClientsIllust}
                alt="leadsClientsIllust"
                className="absolute bottom-[55%] -z-10"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-[96px]">
              <div className="text-xl border border-[#87C446] border-dotted p-5 flex justify-center items-center min-w-[183px] min-h-[171px] rounded-[20px] text-center card-border relative">
                See navigation details
              </div>
              <div className="text-xl border border-[#87C446] border-dotted p-5 flex justify-center items-center min-w-[183px] min-h-[171px] rounded-[20px] text-center card-border relative">
                Keep your phone’s camera/GPS on
              </div>
              <div className="text-xl border border-[#87C446] border-dotted p-5 flex justify-center items-center min-w-[183px] min-h-[171px] rounded-[20px] text-center card-border relative">
                Follow route path
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
