import React, {FC} from 'react';
import {trainersType} from "@/stores/dataStubs/trainersTypes";
import Image from "next/image";
import styled from "styled-components";
import {tag} from "postcss-selector-parser";

const Category: FC<trainersType> = ({title, categories, img}) => {

    const tagsList = [];

    for (let i = 0; i < categories.length; i++) {
        tagsList.push(
            <SingleCategoryStyled>
                <div>{categories[i].title}</div>
                <div>{categories[i].amount}</div>
            </SingleCategoryStyled>
        )
    }

    return (
        <CategoryCardStyled>
            <Image src={img} alt={`${title}`}></Image>

            <div className="bottom">
                <h3 className='text-[20px] font-bold'>{title}</h3>
                <div className="tags-list">
                    {tagsList}
                </div>
            </div>

        </CategoryCardStyled>
    );
};

const CategoryCardStyled = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;    height: 520px;
    width: 400px;
    background: white;
    transition: 700ms;
    
    img {
        width: 100%;
        height: 200px;
    }
    
    .bottom {
        padding: 30px 25px 15px 30px;
    }
    
    .tags-list {
        margin-top: 16px;
    }
    
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    @media screen and (max-width: 1420px) {
        width: 300px;
    }

    @media screen and (max-width: 1100px) {
        width: 330px;
    }
    
`

const SingleCategoryStyled = styled.div`
    transition: 700ms;
    color: #3a3a3a;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 1px solid #a1a1a1;
    
    cursor: pointer;
    
    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        color: black;
    }
    
`

export default Category;