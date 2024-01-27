import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramPredecessor, faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";

import React, { FC, ReactNode } from 'react';
import styled from "styled-components";

type Icons = {
    statistic: number,
    liked: number,
    card: number,
    onlyMobiles: boolean,
    isAuthorized: boolean
}

const HeaderIcons: FC<Icons> = ({ statistic, card, liked , onlyMobiles, isAuthorized}) => {

    if (!isAuthorized) {
        return false;
    }

    return (

        <HeaderIconsStyled className='space-x-10'>
            {!onlyMobiles && <div className="icon-wrapper">
                <FontAwesomeIcon icon={faDiagramPredecessor} size={'xl'}/>
                <span className="icon-number">{statistic}</span>
            </div>}
            {!onlyMobiles && <div className="icon-wrapper">
                <FontAwesomeIcon icon={faHeart} size={'xl'}/>
                <span className="icon-number">{liked}</span>
            </div>}
            <div className="icon-wrapper">
                <FontAwesomeIcon icon={faCartPlus} color='' size={'xl'}/>
                <span className="icon-number">{card}</span>
            </div>
        </HeaderIconsStyled>

    );
};

const HeaderIconsStyled = styled.div`
    
    
    
    .icon-wrapper {
        position: relative;
        display: inline-block;
        transition: 500ms;
        &:hover {
            color: white;
        }
    }

    .icon-number {
        position: absolute;
        top: -10px;
        right: -10px;
        background: red;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        
    }
`

export default HeaderIcons;