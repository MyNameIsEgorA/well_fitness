import Triangle from '/public/images/mainPage/HeroTriangle.svg'
import Woman from '/public/images/mainPage/HeroMain1.png'
import Image from "next/image";
import '@fortawesome/fontawesome-svg-core/styles.css'
import {ReactNode} from "react";
import SwapButtons from "@/src/components/overallUse/SwapButtons";
import LinkButton from "@/src/components/overallUse/LinkButton";

const HeroSection1 = (): ReactNode => {
    return (
        <section
            className='1410px:w-[1800px] 960px:w-[940px] rounded-2xl 1410px:h-[500px] 960px:h-[320px] flex absolute left-1/2 justify-between 1410px:gap-[300px] -translate-x-1/2 bg-heroBackgroundColor 960px:mx-auto 1410px:px-[133px] 1410px:pt-[82px] 960px:pl-[36px] overflow-hidden'>
            <div className="left">
                <h3 className='text-softRed text-[24px] font-extrabold 960px:pt-[20px] 1410px:pt-0'>ZERO RUNNER</h3>
                <div className='text-mainTextColor 1410px:text-5xl 960px:text-2xl 1410px:w-[390px] 960px:w-[268px] leading-[110%] mt-6 mb-9'>
                    <h2 className='font-extrabold '>БЕГ С НУЛЕВОЙ УДАРНОЙ НАГРУЗКОЙ</h2>
                    <h2 className='font-light'>НА СУСТАВЫ</h2>
                </div>
                <LinkButton href='#' color='softRed'/>
                <Image className='absolute bottom-0 1410px:left-[108px]' src={Triangle} alt="background Photo"/>
            </div>
            <div className="right flex justify-between items-end">
                <Image src={Woman} alt={'Woman running'} className='bg-green z-20 mt-[-62px] 1410px:w-[600px] 1410px:h-auto 960px:w-[408px] 960px:h-[317px]'/>
                <SwapButtons/>
            </div>
        </section>
    );
};

export default HeroSection1;