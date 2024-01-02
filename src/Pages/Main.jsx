import React from "react";
import MainCover from "../components/Main/MainCover";
import MainPromotion from "../components/Main/MainPromotion";
import MainVideo from "../components/Main/MainVideo";
import MainHeartleaf from "../components/Main/MainHeartleaf";
import MainLastCover from "../components/Main/MainLastCover";
import MainBrandStory from "../components/Main/MainBrandStory";

const Main = () => {
  return (
    <div className="overflow-x-hidden">
      <MainCover />
      <MainPromotion title={"프로모션"} />
      <MainVideo />
      <MainHeartleaf />
      <MainPromotion title={"베스트"} />
      <MainLastCover image={3} title={`Jericho rose`} />
      <MainLastCover image={4} title={`Sedum hyaluron`} />
      <MainPromotion title={"추천제품"} />
      <MainBrandStory />
    </div>
  );
};

export default Main;
