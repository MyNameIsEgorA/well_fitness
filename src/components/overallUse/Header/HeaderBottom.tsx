import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import HeaderLinks from "@/src/components/overallUse/Header/HeaderLinks";
import HeaderIcons from "@/src/components/overallUse/Header/HeaderIcons";
import {random} from "nanoid";
import styled from "styled-components";
import React, {FC, ReactNode} from "react";
import Border from "@/src/components/overallUse/VerticalBorder";

type PropsType = {
    isAuthorized: boolean;
}

// @ts-ignore
const HeaderBottom: FC<PropsType> = ({isAuthorized}): ReactNode => {

    return (
        <HeaderBottomStyled className='container h-20 border-t-[1px] border-t-[#777] '>
            <div className="left text-white flex items-center">
                <Link className={'p-3 bg-softRed rounded'} href={'#'}>Каталог</Link>
                <Link href={'#'}>
                    <FontAwesomeIcon icon={faSearch} className={'ml-[50px]'}/>
                </Link>
                <Border/>
                <HeaderLinks/>
            </div>
            <div className="right">
                {/*State manager for statistics*/}
                <HeaderIcons isAuthorized={isAuthorized} card={1} liked={1} statistic={3} key={+random(20)} onlyMobiles={false}/>
            </div>
        </HeaderBottomStyled>
        )

}

const HeaderBottomStyled = styled.section`
    
    @media (min-width: 1410px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    display: none;
`

export default HeaderBottom