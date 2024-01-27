import {makeAutoObservable} from 'mobx'
import {StaticImageData} from "next/image";
import {v4 as uuid4} from 'uuid'

import First from '/public/images/homeTrainers/first.png'
import Second from '/public/images/homeTrainers/second.png'
import Img3 from '/public/images/homeTrainers/image 8 (2).png'
import Img4 from '/public/images/homeTrainers/image 8 (3).png'
import Img5 from '/public/images/homeTrainers/image 8 (4).png'
import Img6 from '/public/images/homeTrainers/image 8 (5).png'
import Img7 from '/public/images/homeTrainers/image 8 (6).png'
import Img8 from '/public/images/homeTrainers/image 8 (7).png'
import Img9 from '/public/images/homeTrainers/image 8 (8).png'
import Img10 from '/public/images/homeTrainers/image 8 (9).png'

export enum TypeToFetch {
    House = 'house',
    Gym = 'gym',
}

export type trainer = {
    img: StaticImageData,
    text: string,
    role?: string[];
}

export type trainerToUse = trainer & {
    id: string
}


const improvisedDataAPI: trainer[] = [
    {img: First, text: 'Беговые дорожки', role: ['first', 'purple', 'big']},
    {img: Second, text: 'Эллиптические тренажеры', role: ['big']},
    {img: Img3, text: 'Велотренажеры'},
    {img: Img4, text: 'Горнолыжные тренажеры'},
    {img: Img5, text: 'Силовые тренажеры'},
    {img: Img6, text: 'Гребные тренажеры'},
    {img: Img7, text: 'Батуты'},
    {img: Img8, text: 'Игровые столы'},
    {img: Img9, text: 'Массажные кресла'},
    {img: Img10, text: 'Фитнесс аксессуары'},
]

class TrainersStore {

    private trainersForHome: trainerToUse[] = []
    private trainersForGym: trainerToUse[] = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllTrainersFromAPI = async (type: TypeToFetch): Promise<void> => {
    //     IMITATION of API request
        if (type === 'house') {
            this.trainersForHome = []
            for (let item of improvisedDataAPI) {
                const data: trainerToUse = {
                    img: item.img, text: item.text, id: uuid4(), role: item.role,
                }
                this.trainersForHome.push(data)
            }
        }
        if (type === 'gym') {
            this.trainersForGym = []
            for (let i: number = 0; i < 6; i++) {
                let item: trainer = improvisedDataAPI[i]
                const data: trainerToUse = {
                    img: item.img, text: item.text, id: uuid4(), role: item.role,
                }
                this.trainersForGym.push(data)
            }
        }
    }

    get getTrainersForHome (): trainerToUse[] {
        return this.trainersForHome
    }

    get getTrainersForGym (): trainerToUse[] {
        return this.trainersForGym
    }

}

export const Data: TrainersStore = new TrainersStore();