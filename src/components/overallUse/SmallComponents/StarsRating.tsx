import React, {FC, ReactNode} from 'react';
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

interface StarsRatingProps {
    count: number;
}

const StarsRating: FC<StarsRatingProps> = ({count}): ReactNode => {

    let starsArray: ReactNode[] = [];

    const rounded: number = Math.round(count)

    for (let i = 0; i < 5; i++) {
        if (i < rounded) {
            starsArray.push(
                <FontAwesomeIcon key={i} icon={faStar} color={'yellow'}/>
            )
        }
        else {
            starsArray.push(
                <FontAwesomeIcon key={i} icon={faStar} color={'grey'}/>
            )
        }
    }

    return (
        <div>
            {starsArray}
        </div>
    );
};

export default StarsRating;