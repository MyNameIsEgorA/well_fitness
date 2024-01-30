import Triangle from '/public/images/mainPage/Hero2Bg.png'
import IMG from '/public/images/mainPage/HeroMain2.png'
import Image from "next/image";
import '@fortawesome/fontawesome-svg-core/styles.css'
import {ReactNode} from "react";
import SwapButtons from "@/src/components/overallUse/SmallComponents/SwapButtons";
import LinkButton from "@/src/components/overallUse/SmallComponents/LinkButton";

const HeroSection1 = (): ReactNode => {
    return (
        <section
            className='1410px:w-[1800px] 960px:w-[940px] rounded-2xl 1410px:h-[500px] 960px:h-[320px] flex absolute left-1/2 1410px:justify-between 1410px:gap-[300px] -translate-x-1/2 bg-softRed 960px:mx-auto 1410px:px-[133px] 1410px:pt-[82px] 960px:pl-[36px] overflow-hidden'>
            <div className="left">
                <h3 className='text-white text-[24px] font-extrabold'>ZERO RUNNER</h3>
                <div className='text-white 1410px:text-5xl 960px:text-3xl w-[500px] leading-[110%] 1410px:mt-6 mb-9 z-30'>
                    <h2 className='font-light'>Уникальная</h2>
                    <h2 className='font-bold'>КАРДИО-СИЛОВАЯ ТРЕНИРОВКА</h2>
                    <h2 className='text-black mt-[30px] font-extrabold 1410px:text-6xl'>2 В ОДНОМ</h2>
                </div>
                <div className="link 1410px:mt-[80px] 960px:mt-0 z-30">
                    <LinkButton color={'white'} href='#'/>
                </div>
                <Image className='absolute bottom-0 right-[0] 1410px:w-auto 1410px:h-auto 960px:w-[600px] z-[-1]' src={Triangle} alt="background Photo"/>
            </div>
            <div className="right flex justify-between items-end z-20 ml-[-80px] 1410px:mb-[30px]">
                <Image src={IMG} alt={'Woman running'} className='bg-green z-20 1410px:w-auto 1410px:h-500px 960px:mt[20px] 960px:mt-[-82px] 960px:h-[320px] 960px:w-[350px]'/>
                <SwapButtons/>
            </div>
        </section>
    );
};

export default HeroSection1;