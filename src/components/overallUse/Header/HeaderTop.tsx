import React, {FC, ReactNode} from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import Border from "@/src/components/overallUse/VerticalBorder";
import HeaderIcons from "@/src/components/overallUse/Header/HeaderIcons";
import {random} from "nanoid";
import styled from "styled-components";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import HeaderDropDown from "@/src/components/overallUse/Header/HeaderDropDown";

type PropsTyped = {
    isAuthorized: boolean;
}

const HeaderTop: FC<PropsTyped> = ({isAuthorized}): ReactNode => {
    return (
        <HeaderTopStyled className={'container z-[10] h-20 items-center m-[0 auto]'}>

            <Image src={Logo} className='img' alt={'Well fitness distribution retail clubs'}/>
            <HeaderDropDown/>
            <div className='available-on-max 1810px:flex items-center ml-[500px] hidden'>
                <div className=''>Для дилеров</div>
                <Link href="#" className='p-[10px] bg-[#384255] ml-[50px]'>Become a partner</Link>
                <Border/>
                <Link href='tel:89215901973'>8 (921) 590-19-73</Link>
                <div className='ml-1'>МСК</div>
                <Link href='#' className='ml-7'>Заказать звонок</Link>
            </div>

            <div className='1410px:flex items-center lk hidden'>
                {isAuthorized && <div className='mr-5'>Войти</div>}
                <FontAwesomeIcon icon={faUser}/>
            </div>

            <div className='mid 1410px:hidden flex items-center space-x-10'>
                <Link href={'#'}>
                    <FontAwesomeIcon icon={faSearch} className={'ml-[50px]'}/>
                </Link>
                <HeaderIcons isAuthorized={isAuthorized} card={1} liked={1} statistic={3} key={+random(20)} onlyMobiles={false}/>
                <FontAwesomeIcon icon={faBars} size='xl'/>
            </div>

            <div className="low-scale flex space-x-10">
                <HeaderIcons isAuthorized={isAuthorized} card={1} liked={1} statistic={3} key={+random(20)} onlyMobiles={true}/>
                <FontAwesomeIcon icon={faBars} size='xl'/>
            </div>
        </HeaderTopStyled>
    );
};

const HeaderTopStyled = styled.section`
    
    position: relative;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 1410px) {
        .img {
            width: 170px;
        }
    }
    .low-scale {
        display: none;
    }

    @media (max-width: 750px) {
        .low-scale {
            display: flex;
        }
        
        .mid {
            display: none;
        }
    }
`

export default HeaderTop;