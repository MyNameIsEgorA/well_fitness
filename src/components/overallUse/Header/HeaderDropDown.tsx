"use client"

import React, {FC, ReactNode, useState} from 'react';
import Link from "next/link";

const HeaderDropDown: FC = (): ReactNode => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={`ml-12 ${isOpen ? '' : ""}`}>
            <div className='cursor-pointer available-on-med hidden 960px:flex 960px:items-center 960px:ml-[-40] transition-[500ms] hover:text-red-50' onClick={() => setIsOpen(!isOpen)}>Москва</div>
            {isOpen && <ul className={' absolute bg-violet-700 text-white py-3 pr-3 space-y-3 flex-col flex'}>
                <Link key={1} href='#'>Санкт-Петербург</Link>
                <Link key={2} href='#'>Новгород</Link>
                <Link key={3} href='#'>Казань</Link>
                <Link key={4} href='#'>Минск</Link>
            </ul>}
        </div>
    );
};

export default HeaderDropDown;