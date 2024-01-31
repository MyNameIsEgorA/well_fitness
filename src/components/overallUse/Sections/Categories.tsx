"use client"

import React, {FC, ReactNode, useEffect, useState} from 'react';

import {Data} from "@/stores/gymTrainers";
// import {trainersType} from "@/stores/dataStubs/trainersTypes";
import {trainersType} from "@/types/TrainersTypes/TrainerCardTypes";
import styled from "styled-components";
import Category from "@/src/components/overallUse/SmallComponents/Category";

const Categories: FC = (): ReactNode => {

    const [trainersCategories, setTrainersCategory] = useState<trainersType[]>([]);

    const fetchingData = async (): Promise<void> => {
        await Data.getAllTrainersCategories('house')
        setTrainersCategory(Data.AllTrainersCategories)
    }

    useEffect(() => {
        fetchingData()
    }, []);

    return (
        <TrainersList>
            {trainersCategories.map(obj => {
                return <Category {...obj}/>
            })}
        </TrainersList>
    );
};

const TrainersList = styled.div`
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 57px;

    @media screen and (max-width: 1810px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export default Categories;