import TrainersList from "@/src/components/mainPage/TrainersList";
import {TypeToFetch} from "@/stores/gymForHouse";
import React from "react";

export default function Home() {
  return (
      <main>
          {/*<HeroSection1/>*/}
          {/*<HeroSection2/>*/}
          <TrainersList type={TypeToFetch.House} href={'#'}/>
          <TrainersList type={TypeToFetch.Gym} href={'#'}/>
      </main>
  );
}
