import React from "react";
import MainCover from "../Components/Main/MainCover";
import MainPromotion from "../Components/Main/MainPromotion";
import MainVideo from "../Components/Main/MainVideo";
import MainHeartleaf from "../Components/Main/MainHeartleaf";
import MainLastCover from "../Components/Main/MainLastCover";
import MainBrandStory from "../Components/Main/MainBrandStory";

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
