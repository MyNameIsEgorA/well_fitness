import React, {FC, ReactNode} from 'react';
import {sliderTrainer} from "@/stores/gymTrainers";
import styled from "styled-components";


const TrainerInSlider: FC<sliderTrainer> = ({
    labels,
    id,
    isLiked,
    isInShowroom,
    newPrice,
    oldPrice,
    rating,
    title,
    isAvailable
}): ReactNode => {
    return (
        <div>

        </div>
    );
};

const SliderItemStyled = styled.div`
    padding: 10px 10px 20px 26px;
    background: white;
`

export default TrainerInSlider;