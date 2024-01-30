"use client"
import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled from "styled-components";
import { Data, Trainer } from "@/stores/gymTrainers";
import TrainerInSlider from "@/src/components/overallUse/SmallComponents/TrainerInSlider";
import SwapButtons from "@/src/components/overallUse/SmallComponents/SwapButtons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const TrainersSlider: FC = (): ReactNode => {
    const [option, setOption] = useState<number>(0);
    const [trainers, setTrainers] = useState<Trainer[]>([]);
    const [translateX, setTranslateX] = useState<number>(0);

    const changeItem = async () => {
        await Data.getAllTrainersFromAPI();
        setTrainers(Data.getAllTrainers);
    };

    useEffect(() => {
        changeItem();
    }, []);

    const trainersComponents = trainers.map(trainer => {
        return (
            <TrainerInSlider
                key={trainer.id}
                id={trainer.id}
                title={trainer.title}
                img={trainer.img}
                isAvailable={trainer.isAvailable}
                isInShowroom={trainer.isInShowroom}
                isLiked={trainer.isLiked}
                newPrice={trainer.newPrice}
                oldPrice={trainer.oldPrice}
                rating={trainer.rating}
                labels={trainer.labels}
            />
        );
    });

    const activeStyle: string = 'text-3xl color-black'

    return (
        <TrainerSliderStyled style={{transform: `translateX(${translateX}px)`}}>
            <h2 className='flex space-x-10 items-center'>
                <div className={option === 0 ? activeStyle : ''} onClick={() => setOption(0)}>Акция</div>
                <div className={option === 1 ? activeStyle : ''} onClick={() => setOption(1)}>Новинки</div>
                <div className={option === 2 ? activeStyle : ''} onClick={() => setOption(2)}>Мы рекомендуем</div>
            </h2>
            <div className="mt-[20px] flex justify-between mr-[-100%] pb-5 trainer-slider-content">
                {trainersComponents}
            </div>
        </TrainerSliderStyled>
    );
};

const TrainerSliderStyled = styled.section`
    margin-top: 50px;
    overflow-x: scroll;
    position: relative;

    h2 {
        div {
            cursor: pointer;
            transition: 50ms;
            animation: ease-in-out;
        }
    }

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        //background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #a6b3ff;
        border-radius: 4px;
        transition: 500ms;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #62cbd9;
    }

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        width: 100%;
    }
`;

export default TrainersSlider;