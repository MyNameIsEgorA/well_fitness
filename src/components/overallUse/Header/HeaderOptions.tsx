'use client'; // Эта директива указывает, что компонент должен быть использован на стороне клиента

import React, { ReactNode } from 'react';
import VerticalBorder from "@/src/components/overallUse/SmallComponents/VerticalBorder";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

const HeaderOptions = (): ReactNode => {

    const currentURL: string = usePathname()

    console.log(currentURL)

    const activeStyle: string = 'border-b-[2px] border-green-200 pt-2px';

    return (
        <div className='bg-[#2A2C38]'>
            <div className={`container flex text-white items-center py-2 cursor-pointer~`}>
                <Link href={'/trainers_for_home'} className={`hover:text-blue-300 transition-[500ms] ${currentURL === '/trainers_for_home' ? activeStyle : ''}`}>Для дома</Link>
                <VerticalBorder />
                <Link href={''} className={`hover:text-blue-300 transition-[500ms] ${currentURL === '/trainers_for_gym' ? activeStyle : ''}`}>Для зала</Link>
            </div>
        </div>
    );
};

export default HeaderOptions;