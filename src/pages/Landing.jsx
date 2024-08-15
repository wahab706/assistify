import React, { Fragment } from "react";
import {
  AdvancedNavigation,
  AssistifyActivities,
  AssistifyServices,
  AssistifyTravelAssist,
  GetAssistify,
  InnovativeSolutions,
  LandingBanner,
} from "../components";

export const Landing = () => {
  return (
    <Fragment>
      <div className="max-w-[1370px] mx-auto">
        <LandingBanner />
        <AssistifyServices />
        <AdvancedNavigation />
        <AssistifyActivities />
        <AssistifyTravelAssist />
        <InnovativeSolutions />
        <GetAssistify />
      </div>
    </Fragment>
  );
};
