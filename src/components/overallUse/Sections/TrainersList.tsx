"use client"

import {useState, useEffect, ReactNode} from 'react';
import styled from "styled-components";
// import {Data, trainerCard, trainerToUse, TypeToFetch} from "@/stores/gymTrainers";
import {Data} from "@/stores/gymTrainers";
import {trainerCard} from "@/types/TrainersTypes/TrainerCardTypes";
import {trainerToUseCard} from "@/stores/gymTrainers";
import TrainerCard from "@/src/components/overallUse/SmallComponents/TrainerCard";
import LinkButton from "@/src/components/overallUse/SmallComponents/LinkButton";
import {TypeToFetch} from "@/types/MainPageComponents/MainPageTypes";

type Props = {
    type: TypeToFetch,
    href: string;
}

function TrainersList(props: Props): ReactNode {
    const [result, setResult] = useState<trainerToUseCard[]>([]);

    const fetchTrainers = async (): Promise<void> => {
        await Data.getAllTrainersCardFromAPI(props.type)
        setResult(props.type === 'house' ? Data.getTrainersCardForHome : Data.getTrainersCardForGym);
    };

    useEffect(() => {
        fetchTrainers()
    }, []);

    const classesForGrids: string = 'abcdefghij'

    return (
        <TrainersCatalog className='TrainersCatalog  m-[0 auto] ml-[]'>
            <h2 className='text-3xl font-bold mt-[80px] pb-8'>{props.type === 'house' ? 'Тренажеры для дома' : "Тренажеры для зала"}</h2>
            <ListWithItem>
                {result.map((obj, item) => {
                    return <TrainerCard key={obj.id} id={obj.id} img={obj.img} text={obj.text} position={classesForGrids[item]} role={obj.role}/>
                })}
                <LinkButton href={props.href} color={'softRed'} mt={'8'}/>
            </ListWithItem>
        </TrainersCatalog>
    );
}

const TrainersCatalog = styled.section`
    //margin-top: 500px;
    color: black;
`

const ListWithItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 30px 30px;
    grid-template-areas: 
    "a b c e"
    "a b d f"
    "h i g j";
    .a { grid-area: a; }
    .b { grid-area: b; }
    .c { grid-area: c; }
    .d { grid-area: d; }
    .e { grid-area: e; }
    .f { grid-area: f; }
    .g { grid-area: g; }
    .h { grid-area: h; }
    .i { grid-area: i; }
    .j { grid-area: j; }

    @media (max-width: 1410px) {
        gap: 20px 20px;
    }
    
    @media (max-width: 960px) {
        
        gap: 10px;
        
        grid-template-columns: 1fr 1fr;
        
        grid-template-areas: 
        "a a"
        "b b"
        "c d"
        "e f"
        "g h"
        "i j"
    }
`

export default TrainersList;