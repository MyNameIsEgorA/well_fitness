import React from 'react';
import VerticalBorder from "@/src/components/overallUse/SmallComponents/VerticalBorder";

const HeaderOptions = () => {
    return (
        <div className='bg-[#2A2C38]'>
            <div className="container flex text-white py-2 cursor-pointer">
                <div className='hover:text-blue-300 transition-[500ms]'>Для дома</div>
                <VerticalBorder/>
                <div className='hover:text-blue-300 transition-[500ms]'>Для зала</div>
            </div>
        </div>
    );
};

export default HeaderOptions;