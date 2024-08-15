import React, { Fragment } from "react";
import Banner from "../components/Banner";
import { AssistifyServices } from "../components/AssistifyServices";
import { AdvancedNavigation } from "../components/AdvancedNavigation";
import { AssistifyActivities } from "../components/AssistifyActivities";
import { AssistifyTravelAssist } from "../components/AssistifyTravelAssist";
import { InnovativeSolutions } from "../components/InnovativeSolutions";
import { GetAssistify } from "../components/GetAssistify";
export const Landing = () => {
  return (
    <Fragment>
      <div className="max-w-[1370px] mx-auto">
        <Banner />
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
