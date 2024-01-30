import React, {FC, ReactNode} from 'react';
import Link from "next/link";

interface Props {
    href: string;
    color: string;
    mt?: string;
}

const LinkButton: FC<Props> = ({href, color, mt}): ReactNode => {
    return (
            <Link href={href} className={`mt-[${mt}px] text-[14px] font-bold px-5 py-3 border-solid h-[50px] w-[160px] border-2 border-${color} text-${color}`}>Узнать больше</Link>
    );
};


export default LinkButton;