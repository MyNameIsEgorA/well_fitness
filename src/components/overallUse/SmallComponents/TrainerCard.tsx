import React, {FC, ReactNode} from 'react';
import {trainerCard} from "@/types/TrainersTypes/TrainerCardTypes";
import styled from "styled-components";
import Image from "next/image";

type PropsType = trainerCard & {
    position: string,
}

const TrainerCard: FC<PropsType> = ({position, img, role, text}): ReactNode => {

    let bigCard: string = role?.includes('big') ? "big " : 'default '
    bigCard += role?.includes('purple') ? ' text-white bg-violet-500 z-10 ' : ''

    return (
        <TrainerItem className={`${position} bg-white rounded-2xl shadow-grey-200 shadow-xl overflow-hidden z-[-20]`}>
            <div className={`${bigCard} relative`}>
                <h4 className=''>{text}</h4>
                <Image src={img} alt={'Карточка товара'} className='img h-max absolute right-0 z-[-10] top-[-10px]'/>
            </div>
        </TrainerItem>
    )
};

const TrainerItem = styled.div`

    position: relative;
    
    h4 {
        padding-left: 30px;
        padding-top: 35px;
        font-size: 20px;
        width: 100px;
        z-index: 100;
    }
    
    .big, .default {
        width: 100%;
    }
    
    .big {
        height: 430px;
    }
    
    .default {
        height: 200px;
    }

    @media (max-width: 1410px) {
        .big {
            height: 390px;
        }

        .default {
            height: 135px;
        }
        .img {
            //width: 90%;
            //height: 90%;
        }
    }

    @media (max-width: 960px) {
        .big {
            height: 140px;
        }

        .default {
            height: 140px;
        }
        
    }
`

export default TrainerCard;