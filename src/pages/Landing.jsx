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
import phone from "../assets/img/phone.png";
import googleplay from "../assets/img/googleplay.png";
import appstore from "../assets/img/appstore.png";
import { Link } from "react-router-dom";
import streamlineManualBook from "../assets/img/streamline_manual-book.png";
import materialSymbolsPoint from "../assets/img/material-symbols_point-scan.png";
import mynaui from "../assets/img/mynaui_ar.png";
import aiBrain from "../assets/img/hugeicons_ai-brain.png";
import leverageIllustration from "../assets/img/leverage-illustration.svg";
import teenyiconsSchool from "../assets/img/teenyiconsSchool.png";
import arena from "../assets/img/arena.png";
import bank from "../assets/img/bank.png";
import hospital from "../assets/img/hospital.png";
import solarShop from "../assets/img/solarShop.png";
import airplane from "../assets/img/airplane.png";
import publicBuilding from "../assets/img/publicBuilding.png";
import companionAnytime from "../assets/img/companionAnytime.png";
import arLandmark from "../assets/img/arLandmark.png";
import dotGrid from "../assets/img/dotGrid.svg";
import safetyPhone from "../assets/img/safetyPhone.png";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
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
        <div className="flex flex-col gap-[18.5px] max-w-[1120px] mx-auto mb-[313px]">
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
        <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-[313px]">
          <h2 className="font-semibold text-5xl leading-[60.48px]">
            Assistify will help you with many activities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex gap-10 items-center">
              <div className="min-w-[190px] min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
                <img src={airplane} alt="teenyiconsSchool" />
              </div>
              <div className="flex flex-col gap-[15px]">
                <h4 className="font-bold text-[22.87px] leading-[42.86px]">
                  Transportation
                </h4>
                <p className="text-base text-[#7B7A81] leading-[20px]">
                  Get around airports, train stations, and bus terminals
                  efficiently. Ideal for travelers to locate gates, ticket
                  counters, and lounges
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex gap-10 items-center">
              <div className="min-w-[190px] min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
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
            <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex gap-10 items-center">
              <div className="min-w-[190px] min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
                <img src={hospital} alt="teenyiconsSchool" />
              </div>
              <div className="flex flex-col gap-[15px]">
                <h4 className="font-bold text-[22.87px] leading-[42.86px]">
                  Healthcare
                </h4>
                <p className="text-base text-[#7B7A81] leading-[20px]">
                  Navigate hospitals, clinics, and medical centers with ease.
                  Ensure patients, visitors, and staff can quickly locate
                  departments, wards, and emergency rooms.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex gap-10 items-center">
              <div className="min-w-[190px] min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
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
            <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex gap-10 items-center">
              <div className="min-w-[190px] min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
                <img src={arena} alt="teenyiconsSchool" />
              </div>
              <div className="flex flex-col gap-[15px]">
                <h4 className="font-bold text-[22.87px] leading-[42.86px]">
                  Entertainment
                </h4>
                <p className="text-base text-[#7B7A81] leading-[20px]">
                  Enhance your experience at museums, theaters, and amusement
                  parks. Seamlessly explore attractions, exhibits, and
                  entertainment venues without getting lost
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#EDEDED] rounded-[24px] p-[15px] flex gap-10 items-center">
              <div className="min-w-[190px] min-h-[206px] flex justify-center items-center border border-[#EDEDED] rounded-[25px]">
                <img src={teenyiconsSchool} alt="teenyiconsSchool" />
              </div>
              <div className="flex flex-col gap-[15px]">
                <h4 className="font-bold text-[22.87px] leading-[42.86px]">
                  Education
                </h4>
                <p className="text-base text-[#7B7A81] leading-[20px]">
                  Effortlessly find your way around campuses, libraries, and
                  lecture halls. Perfect for students, faculty, and visitors to
                  navigate large educational institutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-[313px]">
          <h2 className="font-semibold text-5xl leading-[60.48px]">
            Assistify can guide you in every way possible, regardless of your
            travel experience
          </h2>
          <div className="flex flex-col gap-24">
            <div className="flex items-center justify-between relative">
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
                    with effective search and guiding tools to help visitors
                    find their way indoors
                  </p>
                </div>
              </div>
              <img
                src={dotGrid}
                alt="dotGrid"
                className="absolute right-0 bottom-0"
              />
            </div>
            <div className="flex items-center justify-between relative">
              <div className="flex-grow max-w-[760px]">
                <div className="flex flex-col gap-4 items-end">
                  <h3 className="text-4xl font-semibold leading-[57px] max-w-[546px]">
                    Talk to your companion anytime
                  </h3>
                  <p className="text-xl text-[#5E5E5E] max-w-[457px]">
                    Your companion is at your pocket, get help instantly and
                    more accurately just tell you Assistify what to do and get
                    AI response in more contextual manner to your trip or even
                    switch to chat mode
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={companionAnytime}
                  alt="companionAnytime"
                  className="w-[228.52px]"
                />
              </div>
              <img
                src={dotGrid}
                alt="dotGrid"
                className="absolute left-0 bottom-10"
              />
            </div>
            <div className="flex items-center justify-between relative">
              <div>
                <img src={arLandmark} alt="publicBuilding" />
              </div>
              <div className="flex-grow max-w-[840px] ms-auto">
                <div className="flex flex-col gap-4">
                  <h3 className="text-4xl font-semibold leading-[57px] max-w-[634px]">
                    Use AR to scan landmarks or objects and get real-time
                    insights and information
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
                className="absolute right-0 bottom-0"
              />
            </div>
            <div className="flex items-center justify-between relative">
              <div className="flex-grow max-w-[760px]">
                <div className="flex flex-col gap-4 items-end max-w-[634px]">
                  <h3 className="text-4xl font-semibold leading-[57px] max-w-[457px] w-full">
                    Safety is top priority
                  </h3>
                  <p className="text-xl text-[#5E5E5E] max-w-[457px]">
                    Get quick access reaching to emergency numbers or common
                    pubic services contact details and SOS feature to help you
                    get instant help
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={safetyPhone}
                  alt="companionAnytime"
                  className="w-[228.52px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-[313px]">
          <h2 className="font-semibold text-5xl leading-[90px]">
            Leverage tomorrows technologies today
          </h2>
          <div className="grid grid-cols-1 gap-y-12 lg:gap-y-0 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3.5 items-center">
              <h5 className="text-xl leading-[37.48px] text-center">
                Advance Tech AI/AR/BLE
              </h5>
              <div className="min-w-[183px] min-h-[173px] flex items-center justify-center bg-white py-[22.5px] px-[25.5px] border border-[#EDEDED] rounded-[20px]">
                <img src={mynaui} alt="mynaui" />
              </div>
            </div>
            <div className="flex flex-col gap-3.5 items-center">
              <h5 className="text-xl leading-[37.48px] text-center">
                Get a cutting edge AI
              </h5>
              <div className="min-w-[183px] min-h-[173px] flex items-center justify-center bg-white py-[22.5px] px-[25.5px] border border-[#EDEDED] rounded-[20px]">
                <img src={aiBrain} alt="aiBrain" />
              </div>
            </div>
            <div className="flex flex-col gap-3.5 items-center">
              <h5 className="text-xl leading-[37.48px] text-center">
                Accurate & Reliable
              </h5>
              <div className="min-w-[183px] min-h-[173px] flex items-center justify-center bg-white py-[22.5px] px-[25.5px] border border-[#EDEDED] rounded-[20px]">
                <img src={materialSymbolsPoint} alt="materialSymbolsPoint" />
              </div>
            </div>
            <div className="flex flex-col gap-3.5 items-center">
              <h5 className="text-xl leading-[37.48px] text-center">
                Feature complete & guided.
              </h5>
              <div className="min-w-[183px] min-h-[173px] flex items-center justify-center bg-white py-[22.5px] px-[25.5px] border border-[#EDEDED] rounded-[20px]">
                <img src={streamlineManualBook} alt="streamlineManualBook" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto bg-white py-7.5 px-5 border border-[#EDEDED] rounded-[20px]">
          <div className="max-w-[747.19px] mx-auto grid grid-cols-12 items-center gap-[70px]">
            <div className="col-span-8">
              <div className="flex flex-col gap-4 max-w-[355px]">
                <h3 className="text-5xl font-semibold leading-[90px]">
                  Get Assistify now
                </h3>
                <p className="text-xl text-[#6E6E6E]">
                  Get your questions answered, on your phone now.
                </p>
              </div>
              <div className="flex gap-[17px] items-center flex-wrap mt-16">
                <Link to="">
                  <img
                    src={googleplay}
                    alt="googleplay"
                    className="w-[204px]"
                  />
                </Link>
                <Link to="">
                  <img src={appstore} alt="appstore" className="w-[204px]" />
                </Link>
              </div>
            </div>
            <div className="col-span-4">
              <img src={phone} alt="phone" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
