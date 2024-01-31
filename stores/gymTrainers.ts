import {makeAutoObservable} from 'mobx'
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
import {Trainers} from "@/stores/dataStubs/trainers";
import {trainersForHomeCategories} from "@/stores/dataStubs/trainersTypes";
import {trainerCard} from "@/types/TrainersTypes/TrainerCardTypes";
import {trainersType} from "@/types/TrainersTypes/TrainerCardTypes";
import {TrainerOnList} from "@/types/TrainersTypes/TrainerTypes";
import {TypeToFetch} from "@/types/MainPageComponents/MainPageTypes";

export type trainerToUseCard = trainerCard & {
    id: string
}


const improvisedDataAPI: trainerCard[] = [
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

    private trainersForHomeCard: trainerToUseCard[] = []
    private trainersForGymCard: trainerToUseCard[] = []
    private allTrainers: TrainerOnList[] = []
    private homeTrainersCategories: trainersType[] = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllTrainersCardFromAPI = async (type: TypeToFetch): Promise<void> => {
    //     IMITATION of API request
        if (type === 'house') {
            this.trainersForHomeCard = []
            for (let item of improvisedDataAPI) {
                const data: trainerToUseCard = {
                    img: item.img, text: item.text, id: uuid4(), role: item.role,
                }
                this.trainersForHomeCard.push(data)
            }
        }
        if (type === 'gym') {
            this.trainersForGymCard = []
            for (let i: number = 0; i < 6; i++) {
                let item: trainerCard = improvisedDataAPI[i]
                const data: trainerToUseCard = {
                    img: item.img, text: item.text, id: uuid4(), role: item.role,
                }
                this.trainersForGymCard.push(data)
            }
        }
    }

    getAllTrainersCategories = async (type: string): Promise<void> => {
    //      HARDCORE API REQUEST
        if (type === 'house') {
            this.homeTrainersCategories = trainersForHomeCategories;
        }
    }

    getAllTrainersFromAPI = async () => {
    //     Imitation of API request
        this.allTrainers = Trainers;
    }

    get getAllTrainers (): TrainerOnList[] {
        return this.allTrainers
    }

    get getTrainersCardForHome (): trainerToUseCard[] {
        return this.trainersForHomeCard
    }

    get getTrainersCardForGym (): trainerToUseCard[] {
        return this.trainersForGymCard
    }

    get AllTrainersCategories (): trainersType[] {
        return this.homeTrainersCategories
    }
}

export const Data: TrainersStore = new TrainersStore();