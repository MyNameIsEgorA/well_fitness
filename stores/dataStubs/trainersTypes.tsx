import Trainer1 from '@/public/images/trainersCategories/Trainer1.png'
import Trainer2 from '@/public/images/trainersCategories/Trainer2.png'
import Trainer3 from '@/public/images/trainersCategories/Trainer3.png'
import Trainer4 from '@/public/images/trainersCategories/Trainer4.png'
import Trainer5 from '@/public/images/trainersCategories/Trainer5.png'
import Trainer6 from '@/public/images/trainersCategories/Trainer6.png'
import Trainer7 from '@/public/images/trainersCategories/Trainer7.png'
import Trainer8 from '@/public/images/trainersCategories/Trainer8.png'
import {trainersType} from "@/types/TrainersTypes/TrainerCardTypes";

export const trainersForHomeCategories: trainersType[] = [
    {
        img: Trainer1,
        title: 'Кардиотренажеры',
        categories: [
            {title: 'Беговые дорожки', amount: 57},
            {title: 'Эллиптические дорожки', amount: 23},
            {title: "Велотренажеры", amount: 12},
            {title: "Степперы", amount: 10},
            {title: "Гребные тренажеры", amount: 15},
            {title: "Сайклинг", amount: 20},
            {title: "Горнолыжные", amount: 18}
        ]
    },
    {
        img: Trainer2,
        title: 'Силовые тренажеры',
        categories: [
            {title: 'Тренажеры для рук', amount: 10},
            {title: 'Тренажеры для ног', amount: 15},
            {title: 'Тренажеры для спины', amount: 20},
        ]
    },
    {
        img: Trainer3,
        title: 'Уличные виды спорта',
        categories: [
            {title: 'Баскетбол', amount: 30},
            {title: 'Футбол', amount: 25},
            {title: 'Теннис', amount: 20},
        ]
    },
    {
        img: Trainer4,
        title: 'Свободные веса',
        categories: [
            {title: 'Универсальные', amount: 40},
            {title: 'С фитболом', amount: 35},
            {title: 'С гантелями', amount: 30},
        ]
    },
    {
        img: Trainer5,
        title: 'Игровые столы',
        categories: [
            {title: 'Для настольных игр', amount: 50},
            {title: 'Для карт', amount: 45},
            {title: 'Для ролевых игр', amount: 40},
        ]
    },
    {
        img: Trainer6,
        title: 'Массажное оборудование',
        categories: [
            {title: 'Массажные столы', amount: 60},
            {title: 'Массажные кресла', amount: 55},
            {title: 'Аппараты для массажа', amount: 50},
        ]
    },
    {
        img: Trainer7,
        title: 'Фитнес Аксессуары',
        categories: [
            {title: 'Фитнес-браслеты', amount: 70},
            {title: 'Умные часы', amount: 65},
            {title: 'Фитнес-браслеты', amount: 60},
        ]
    },
    {
        img: Trainer8,
        title: 'Функциональный тренинг',
        categories: [
            {title: 'Тренажерные залы', amount: 80},
            {title: 'Групповые тренировки', amount: 75},
            {title: 'Индивидуальные тренировки', amount: 70},
        ]
    },
]