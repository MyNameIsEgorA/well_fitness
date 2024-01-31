import React, {FC, ReactNode, useState} from 'react';
import {Trainer} from "@/stores/gymTrainers";
import styled from "styled-components";
import Sale from '@/public/images/SALE_LABEL.svg'
import Like from '@/public/images/LIKE_LABEL.svg'
import New from '@/public/images/NEW.svg'
import Statistic from '@/public/images/STATISTIC.svg'
import Heart from '@/public/images/HEART_LABEL.svg'
import Image from "next/image";
import StarsRating from "@/src/components/overallUse/SmallComponents/StarsRating";
import LinkButton from "@/src/components/overallUse/SmallComponents/LinkButton";
import Link from "next/link";


const TrainerInSlider: FC<Trainer> = ({
    labels,
    id,
    isLiked,
    isInShowroom,
    newPrice,
    oldPrice,
    rating,
    title,
    isAvailable,
    img
}): ReactNode => {

    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <SliderItemStyled onClick={() => setIsActive(!isActive)} className={`${isActive ? 'active-card' : ''}`}>
                <div className={` top flex justify-between ${isActive ? 'active-labels' : ''}`}>
                    <div className="left">
                        {labels.sale && <Image src={Sale} alt={'sale'}/>}
                        {labels.like && <Image src={Like} alt={'liked'}/>}
                        {labels.new && <Image src={New} alt={'new'}/>}
                    </div>
                    <div className="right flex">
                        <Image src={Statistic} alt={'statistic'}/>
                        <Image src={Heart} alt={'liked'}/>
                    </div>
                </div>
                <Image className='' src={img} alt={'trainer'}/>
                {isAvailable &&
                    <div className='available flex justify-between'>
                        <div className="text-green-500">В наличии</div>
                        {isInShowroom && <div className="text-blue-300">Есть в шоу-руме</div>}
                    </div>}
                <h4 className='mt-3 font-bold'>{title}</h4>
                <div className='flex items-center space-x-4 mt-1'>
                    <div className='text-[13px]'>Рейтинг</div>
                    <StarsRating count={rating}/>
                </div>
                <div className="bottom mt-5 flex items-center">
                    <div className="price absolute bottom-2">
                        <div className="text-[#1a1a25] text-[20px]">{newPrice} Р</div>
                        {labels.sale && <div className="text-[#858Fa4] text-[16px] line-through">{oldPrice} Р</div>}
                    </div>
                    <Link
                        className='text-white py-2 px-4 bg-softRed rounded flex items-center absolute bottom-2 right-3'
                        href={'#'}>Купить</Link>
                </div>
        </SliderItemStyled>
    );
};

const SliderItemStyled = styled.div`
    
    margin-right: 30px;
    
    position: relative;
    overflow: hidden;
    padding: 10px 10px 20px 26px;
    background: white;
    min-width: 303px;
    min-height: 505px;
    transition: 500ms;
    
    &.active-card {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    
    .left {
        display: flex;

        img {
            min-width: 36px;
            min-height: 36px;
            margin-left: -10px;
            transition: 500ms;
        }
    }

    .active-labels {
        img:not(:first-child) {
            margin-left: 10px;
        }
    }

    .right {
        column-gap: 10px;
    }

    h4 {
        font-size: 16px;
        line-height: 150%;
        white-space: normal; // Разрешаем перенос текста
        overflow-wrap: break-word;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 960px) {
        min-width: 270px;
        max-width: 270px;
        min-height: 475px;
        max-height: 475px;
    }

    @media screen and (max-width: 750px) {
        width: 219px;
        height: 387px;

        .available {
            margin-top: -15px;
            display: flex;
            flex-direction: column;
        }

        h4 {
            margin-top: 0;
            font-size: 14px;
        }

        .price {
            div {
                font-size: 16px;
            }
        }
    }

`

export default TrainerInSlider;