import React, { useState } from "react";
import MainCover from "../Components/Main/MainCover";
import MainPromotion from "../Components/Main/MainPromotion";
import MainVideo from "../Components/Main/MainVideo";
import MainHeartleaf from "../Components/Main/MainHeartleaf";
import MainLastCover from "../Components/Main/MainLastCover";
import MainBrandStory from "../Components/Main/MainBrandStory";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const [title, setTitle] = useState(["프로모션", "베스트", "추천제품"]);
  return (
    <div className="m-0 box-border w-full overflow-x-hidden p-0 dark:bg-black dark:text-white ">
      <MainCover />
      <MainPromotion title={title[0]} titleArr={title} />
      <MainVideo />
      <MainHeartleaf />
      <MainPromotion title={title[1]} titleArr={title} />
      <MainLastCover image={3} title={`Jericho rose`} />
      <MainLastCover image={4} title={`Sedum hyaluron`} />
      <MainPromotion title={title[2]} titleArr={title} />
      <MainBrandStory />
    </div>
  );
};

export default Main;
