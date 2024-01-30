'use client'

import React, {FC, ReactNode} from "react";
import HeaderBottom from "@/src/components/overallUse/Header/HeaderBottom";
import HeaderTop from "@/src/components/overallUse/Header/HeaderTop";
import HeaderOptions from "@/src/components/overallUse/Header/HeaderOptions";

type PropsType = {
    isAuthorized: boolean;
}

const Header: FC<PropsType> = ({isAuthorized}): ReactNode => {

    return (
        <header className='bg-darkPurple z-0 text-softGrey'>

            <HeaderTop isAuthorized/>
            <HeaderBottom isAuthorized/>
            <HeaderOptions/>
        </header>
    )
};

export default Header;