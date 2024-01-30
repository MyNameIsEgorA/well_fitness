import {ReactNode} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const SwapButtons = (onChangeLeft: () => void, onChangeRight: () => void): ReactNode => {
    return (
        <div className="buttons pb-[30px] align flex gap-3 1410px:pl-20 cursor-pointerm z-20 960px:pr-[80px]">
            <FontAwesomeIcon onClick={onChangeLeft} icon={faAngleLeft} style={{fontSize: 20, color: 'red', width: "30px", height: "30px"}}
                             className='rounded-full bg-white p-3'></FontAwesomeIcon>
            <FontAwesomeIcon onClick={onChangeRight} icon={faAngleRight} style={{fontSize: 20, color: 'red', width: "30px", height: "30px"}}
                             className='rounded-full bg-white p-3'></FontAwesomeIcon>
        </div>
    );
};

SwapButtons.propTypes = {};

export default SwapButtons;