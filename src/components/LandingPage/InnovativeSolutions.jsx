import React from "react";
import streamlineManualBook from "../../assets/img/streamline_manual-book.png";
import materialSymbolsPoint from "../../assets/img/material-symbols_point-scan.png";
import mynaui from "../../assets/img/mynaui_ar.png";
import aiBrain from "../../assets/img/hugeicons_ai-brain.png";
import leverageIllustration from "../../assets/img/leverage-illustration.svg";

export const InnovativeSolutions = () => {
  return (
    <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-40 md:mb-[313px]">
      <h2 className="font-semibold text-3xl lg:text-5xl lg:leading-[90px]">
        Leverage tomorrows technologies today
      </h2>
      <div className="grid grid-cols-1 gap-y-12 lg:gap-y-0 xs:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3.5 items-center">
          <h5 className="font-light text-[#5E5E5E] text-xl leading-[37.48px] text-center">
            Advance Tech AI/AR/BLE
          </h5>
          <div className="min-w-[183px] min-h-[173px] flex items-center justify-center bg-white py-[22.5px] px-[25.5px] border border-[#EDEDED] rounded-[20px]">
            <img src={mynaui} alt="mynaui" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center">
          <h5 className="font-light text-[#5E5E5E] text-xl leading-[37.48px] text-center">
            Get a cutting edge AI
          </h5>
          <div className="min-w-[183px] min-h-[173px] flex items-center justify-center bg-white py-[22.5px] px-[25.5px] border border-[#EDEDED] rounded-[20px]">
            <img src={aiBrain} alt="aiBrain" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center">
          <h5 className="font-light text-[#5E5E5E] text-xl leading-[37.48px] text-center">
            Accurate & Reliable
          </h5>
          <div className="min-w-[183px] min-h-[173px] flex items-center justify-center bg-white py-[22.5px] px-[25.5px] border border-[#EDEDED] rounded-[20px]">
            <img src={materialSymbolsPoint} alt="materialSymbolsPoint" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center relative">
          <img
            src={leverageIllustration}
            className="absolute -z-10 top-[56.1%] right-[30px]"
            alt="leverageIllustration"
          />
          <h5 className="font-light text-[#5E5E5E] text-xl leading-[37.48px] text-center">
            Feature complete & guided.
          </h5>
          <div className="min-w-[183px] min-h-[173px] flex items-center justify-center bg-white py-[22.5px] px-[25.5px] border border-[#EDEDED] rounded-[20px]">
            <img src={streamlineManualBook} alt="streamlineManualBook" />
          </div>
        </div>
      </div>
    </div>
  );
};
