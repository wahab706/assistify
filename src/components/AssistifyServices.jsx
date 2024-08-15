import navigation from "../assets/img/navigation.svg";
import mapping from "../assets/img/mapping.svg";
import tracking from "../assets/img/tracking.svg";
import safety from "../assets/img/safety.svg";
import locationInfo from "../assets/img/locationInfo.svg";
import translation from "../assets/img/translation.svg";
import cardIllustrationTop from "../assets/img/card-illustration-top.svg";
import cardIllustrationBottom from "../assets/img/card-illustration-botm.svg";

export const AssistifyServices = () => {
  return (
    <div className="flex flex-col gap-[54px] max-w-[1120px] mx-auto mb-24 md:mb-[195px]">
      <h2 className="font-semibold text-3xl lg:text-5xl lg:leading-[60.48px]">
        Assistify can help you with
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
        <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4">
          <img src={navigation} alt="navigation" className="mb-2" />
          <h3 className="w-full text-start text-black font-semibold text-xl lg:text-[32px] lg:leading-[40.32px]">
            Indoor navigation
          </h3>
          <p className="text-lg lg:text-xl lg:leading-[25.4px]">
            Transform your building into interactive digital floor maps with
            effective search and guiding tools to help visitors find their way
            indoors
          </p>
        </div>
        <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4 relative">
          <img src={mapping} alt="mapping" className="mb-2" />
          <img
            src={cardIllustrationTop}
            alt="cardIllustrationTop"
            className="hidden md:block lg:hidden absolute bottom-[81%] right-3 -z-10"
          />
          <h3 className="w-full text-start text-black font-semibold text-xl lg:text-[32px] lg:leading-[40.32px]">
            Plan your trip
          </h3>
          <p className="text-lg lg:text-xl lg:leading-[25.4px]">
            Create interactive 2D and 3D digital indoor floor maps for your
            building, define points of interest, and connect them with the right
            routes.
          </p>
        </div>
        <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4 relative">
          <img src={tracking} alt="tracking" />
          <img
            src={cardIllustrationTop}
            alt="cardIllustrationTop"
            className="hidden lg:block absolute bottom-[81%] right-3 -z-10"
          />
          <h3 className="w-full text-start text-black font-semibold text-xl lg:text-[32px] lg:leading-[40.32px]">
            Talk to your AI
          </h3>
          <p className="text-lg lg:text-xl lg:leading-[25.4px]">
            Track assets and staff real time and manage your resources
            efficiently. You can monitor, set alerts, and response to incidents
          </p>
        </div>
        <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4 relative card-after">
          <img src={safety} alt="safety" className="mb-2" />
          <img
            src={cardIllustrationBottom}
            alt="cardIllustrationBottom"
            className="hidden lg:block absolute top-[50%] -left-12 -z-10"
          />
          <h3 className="w-full text-start text-black font-semibold text-xl lg:text-[32px] lg:leading-[40.32px]">
            Safety & help
          </h3>
          <p className="text-lg lg:text-xl lg:leading-[25.4px]">
            Track assets and staff real time and manage your resources
            efficiently. You can monitor, set alerts, and response to incidents
          </p>
        </div>
        <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4 relative">
          <img src={locationInfo} alt="locationInfo" className="mb-2" />
          <img
            src={cardIllustrationBottom}
            alt="cardIllustrationBottom"
            className="hidden md:block lg:hidden absolute top-[60%] left-0 -z-10"
          />
          <h3 className="w-full text-start text-black font-semibold text-xl lg:text-[32px] lg:leading-[40.32px]">
            Location info
          </h3>
          <p className="text-lg lg:text-xl lg:leading-[25.4px]">
            Use your camera to scan public landmarks to more insights or just
            request an instant location and see your location details
          </p>
        </div>
        <div className="bg-white border border-[#CDCDCD] p-5 rounded-3xl flex flex-col items-center gap-4">
          <img src={translation} alt="translation" />
          <h3 className="w-full text-start text-black font-semibold text-xl lg:text-[32px] lg:leading-[40.32px]">
            Easy Translation
          </h3>
          <p className="text-lg lg:text-xl lg:leading-[25.4px]">
            Dont get lost in translation again, Easy translation for uploading
            documents, street boards/signs recognition, text prompts or even
            voice
          </p>
        </div>
      </div>
    </div>
  );
};
