import React from "react";
import { Button } from "../../components";
import bannerIllustration from "../../assets/img/banner-illustration.svg";
import bannerImg from "../../assets/img/bannerImg.svg";
import googleplay from "../../assets/img/googleplay.svg";
import appstore from "../../assets/img/appstore.svg";

export function LandingBanner() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1120px] mx-auto mb-24 md:mb-[195px] gap-20 lg:gap-0">
        <div className="order-2 lg:order-1 flex flex-col gap-6 lg:col-span-6">
          <h3 className="text-[#000] font-semibold text-3xl lg:text-[64px] lg:leading-[70px]">
            Explore Saudi Arabia with Ease – Your Ultimate Travel Companion
          </h3>
          <h4 className="text-[#000] font-semibold text-xl lg:text-2xl">
            Guides, AI Insights, Emergency Services, and Indoor Navigation – All
            in One App
          </h4>
          <div className="flex justify-between xs:justify-start gap-3 xs:gap-[17px] items-center flex-wrap">
            <a href="" target="_blank">
              <img
                src={googleplay}
                alt="googleplay"
                className="w-[160px] xs:w-[204px]"
              />
            </a>
            <a href="" target="_blank">
              <img
                src={appstore}
                alt="appstore"
                className="w-[160px] xs:w-[204px]"
              />
            </a>
          </div>
          <Button primary className="!font-medium">
            Contact us
          </Button>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center items-center">
          <div className="absolute -z-10 xl:-top-[87px] xl:right-[30px]">
            <img src={bannerIllustration} alt="bannerIllustration" />
          </div>
          <img src={bannerImg} alt="bannerImg" width={499} />
        </div>
      </div>
    </div>
  );
}
