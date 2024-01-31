"use client"

import React from 'react';
import Categories from "@/src/components/overallUse/Sections/Categories";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styled from "styled-components";
import TrainersSlider from "@/src/components/overallUse/Sections/TrainersSlider";

const Page = () => {

    return (

        <CategoriesStyled>
            <div className="flex items-center space-x-6">
                <Link href={'/'}>
                    <FontAwesomeIcon icon={faHome} color={'grey'} size='x'/>
                </Link>
                <Link href={'#'}>
                    <div className={'text-[14px] text-grey'}>Товары для дома</div>
                </Link>
            </div>
            <h1 className={'mt-[30px] text-[38px]'}>Тренажеры для дома</h1>
            <Categories/>

            <TrainersSlider/>

        </CategoriesStyled>
    );
};

const CategoriesStyled = styled.section`
    margin-top: 60px;
`

export default Page;