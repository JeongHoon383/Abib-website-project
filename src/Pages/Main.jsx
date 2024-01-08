import React from "react";
import MainCover from "../Components/Main/MainCover";
import MainPromotion from "../Components/Main/MainPromotion";
import MainVideo from "../Components/Main/MainVideo";
import MainHeartleaf from "../Components/Main/MainHeartleaf";
import MainLastCover from "../Components/Main/MainLastCover";
import MainBrandStory from "../Components/Main/MainBrandStory";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const {
    isPending: promotionLoading,
    error: promotionError,
    data: promotionData,
  } = useQuery({
    queryKey: ["promotionData"],
    queryFn: () => axios.get(`http://127.0.0.1:9090`).then((res) => res.data),
  });

  return (
    <div className="m-0 box-border w-full overflow-x-hidden p-0 dark:bg-black dark:text-white ">
      <MainCover />
      <MainPromotion title={"프로모션"} data={promotionData} />
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
