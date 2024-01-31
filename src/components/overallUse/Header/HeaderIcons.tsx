import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramPredecessor, faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";

import React, {FC, ReactNode, useEffect, useState} from 'react';
import styled from "styled-components";
import UserData from "@/stores/UserStore";
import {UserNotifications} from "@/types/UserTypes/HeaderTypes";

const HeaderIcons: FC = (): ReactNode => {

    if (!UserData.isLoggined) {
        return false;
    }

    const [data, setData] = useState<UserNotifications>({liked: 0, cart: 0, statistic: 0})

    const getData = async (): Promise<void> => {
        await UserData.getUserDataAPI()
        setData(UserData.getUserData)
    }

    useEffect(() => {
        getData()
    }, []);

    return (

        <HeaderIconsStyled className='space-x-10'>
            <div className="icon-wrapper nonMobile">
                <FontAwesomeIcon icon={faDiagramPredecessor} size={'xl'}/>
                <span className="icon-number">{data.statistic}</span>
            </div>
            <div className="icon-wrapper nonMobile">
                <FontAwesomeIcon icon={faHeart} size={'xl'}/>
                <span className="icon-number">{data.liked}</span>
            </div>
            <div className="icon-wrapper">
                <FontAwesomeIcon icon={faCartPlus} color='' size={'xl'}/>
                <span className="icon-number">{data.cart}</span>
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
    
    @media screen and (max-width: 750px) {
        display: none;
    }
    
`

export default HeaderIcons;