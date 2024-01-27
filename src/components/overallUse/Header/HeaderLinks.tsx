import React from 'react';
import Link from "next/link";
import {v4 as uuid} from 'uuid'

type Link = {
    href: string,
    text: string
}

const data: Link[] = [
    {href: '#', text: 'Бренды'},
    {href: '#', text: 'Сервис'},
    {href: '#', text: 'Услуги'},
    {href: '#', text: 'Поддержка'},
    {href: '#', text: 'О компании'},
    {href: '#', text: 'Блог'},
    {href: '#', text: 'Где купить'},
    {href: '#', text: 'Контакты'},
]

const HeaderLinks = () => {
    return (
        <ul className=' flex items-center gap-[22px] text-[14px]'>
            {data.map(obj => <li className={'hover:border-b-blue-800 mt-2 pb-1 border-b-2 transition-[500ms] border-transparent'}>
                <Link href={obj.href} key={uuid()}>{obj.text}</Link>
            </li>)}
        </ul>
    );
};

export default HeaderLinks;