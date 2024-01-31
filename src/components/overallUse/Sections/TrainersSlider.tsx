"use client"
import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled from "styled-components";
import { Data } from "@/stores/gymTrainers";
import {TrainerOnList} from "@/types/TrainersTypes/TrainerTypes";
import TrainerInSlider from "@/src/components/overallUse/SmallComponents/TrainerInSlider";

const TrainersSlider: FC = (): ReactNode => {
    const [option, setOption] = useState<number>(0);
    const [trainers, setTrainers] = useState<TrainerOnList[]>([]);
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
                category={'Беговая дорожка'}
            />
        );
    });

    const activeStyle: string = 'text-3xl color-black'

    return (
        <TrainerSliderStyled>
            <h2 className='flex space-x-10 items-center'>
                <div className={option === 0 ? activeStyle : ''} onClick={() => setOption(0)}>Акция</div>
                <div className={option === 1 ? activeStyle : ''} onClick={() => setOption(1)}>Новинки</div>
                <div className={option === 2 ? activeStyle : ''} onClick={() => setOption(2)}>Мы рекомендуем</div>
            </h2>
            <div className="carousel mt-[20px] flex justify-between pb-5 trainer-slider-content">
                {option === 0 && trainersComponents.filter((obj) => obj.props.labels.sale)}
                {option === 1 && trainersComponents.filter((obj) => obj.props.labels.new)}
                {option === 2 && trainersComponents.filter((obj) => obj.props.labels.like)}
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
        height: 16px;
    }

    &::-webkit-scrollbar-track {
        //background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #a6b3ff;
        border-radius: 8px;
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
    
    .carousel {
        margin-right: initial;
    }
`;

export default TrainersSlider;