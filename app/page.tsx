import TrainersList from "@/src/components/mainPage/TrainersList";
import {TypeToFetch} from "@/stores/gymTrainers";
import React from "react";
import TrainersSlider from "@/src/components/overallUse/Sections/TrainersSlider";

export default function Home() {
  return (
      <main>
          {/*<HeroSection1/>*/}
          {/*<HeroSection2/>*/}
          <TrainersList type={TypeToFetch.House} href={'#'}/>
          <TrainersList type={TypeToFetch.Gym} href={'#'}/>
          <TrainersSlider/>
      </main>
  );
}
