import {StaticImageData} from "next/image";

export type trainerCard = {
    img: StaticImageData,
    text: string,
    role?: string[];
}

type category = {
    title: string,
    amount: number
}

export type trainersType = {
    img: any,
    title: string,
    categories: category[]
}