"use client"

import React, {FC, ReactNode, useState} from 'react';
import styled from "styled-components";


const TrainersSlider: FC = (): ReactNode => {

    const [option, setOption] = useState<number>(0)

    const activeStyle: string = 'text-3xl color-black'

    return (
        <TrainerSliderStyled>
            <h2 className='flex space-x-10 items-center'>
                <div className={`${option === 0 ? activeStyle : ''}`} onClick={() => setOption(0)}>Акция</div>
                <div className={`${option === 1 ? activeStyle : ''}`} onClick={() => setOption(1)}>Новинки</div>
                <div className={`${option === 2 ? activeStyle : ''}`} onClick={() => setOption(2)}>Мы рекомендуем</div>
            </h2>
        </TrainerSliderStyled>
    );
};

const TrainerSliderStyled = styled.section`
    margin-top: 50px;

    overflow: hidden; // Добавляем это свойство, чтобы создать контейнер с фиксированной шириной
    white-space: nowrap;
    
    h2 {
        div {
            cursor: pointer;
            transition: 50ms;
            animation: ease-in-out;
        }
    }
    
`

export default TrainersSlider;