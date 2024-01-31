import Trainer1 from '@/public/images/trainers/Trainer1.png'
import Trainer2 from '@/public/images/trainers/Trainer2.png'
import Trainer3 from '@/public/images/trainers/Trainer3.png'
import {Trainer} from "@/stores/gymTrainers";

export const Trainers: Trainer[] = [
    {labels: {sale: true, like: true, new: true}, isLiked: true, isAvailable: true, isInShowroom: true, title: 'Беговая дорожка CardioPower S35', rating: 5, oldPrice: '99.999', newPrice: '79.999', id: '1', img: Trainer1, category: "Беговая дорожка"},
    {labels: {sale: true, like: false, new: true}, isLiked: false, isAvailable: true, isInShowroom: false, title: 'Беговая дорожка CardioPower S36', rating: 4.5, oldPrice: '109.999', newPrice: '89.999', id: '2', img: Trainer1, category: "Беговая дорожка"},
    {labels: {sale: true, like: false, new: false}, isLiked: true, isAvailable: false, isInShowroom: true, title: 'Беговая дорожка CardioPower S37', rating: 3.5, oldPrice: '119.999', newPrice: '99.999', id: '3', img: Trainer2, category: "Беговая дорожка"},
    {labels: {sale: true, like: true, new: true}, isLiked: false, isAvailable: true, isInShowroom: false, title: 'Беговая дорожка CardioPower S38', rating: 4.0, oldPrice: '129.999', newPrice: '109.999', id: '4', img: Trainer2, category: "Беговая дорожка"},
    {labels: {sale: true, like: false, new: false}, isLiked: true, isAvailable: false, isInShowroom: true, title: 'Беговая дорожка CardioPower S39', rating: 3.0, oldPrice: '139.999', newPrice: '119.999', id: '5', img: Trainer3, category: "Беговая дорожка"},
    {labels: {sale: false, like: true, new: true}, isLiked: false, isAvailable: true, isInShowroom: false, title: 'Беговая дорожка CardioPower S40', rating: 4.5, oldPrice: '149.999', newPrice: '129.999', id: '6', img: Trainer3, category: "Беговая дорожка"},
    {labels: {sale: true, like: false, new: false}, isLiked: true, isAvailable: false, isInShowroom: true, title: 'Беговая дорожка CardioPower S41', rating: 3.5, oldPrice: '159.999', newPrice: '139.999', id: '7', img: Trainer1, category: "Беговая дорожка"},
    {labels: {sale: false, like: true, new: true}, isLiked: false, isAvailable: true, isInShowroom: false, title: 'Беговая дорожка CardioPower S42', rating: 4.0, oldPrice: '169.999', newPrice: '149.999', id: '8', img: Trainer1, category: "Беговая дорожка"},
    {labels: {sale: true, like: false, new: false}, isLiked: true, isAvailable: false, isInShowroom: true, title: 'Беговая дорожка CardioPower S43', rating: 3.0, oldPrice: '179.999', newPrice: '159.999', id: '9', img: Trainer2, category: "Беговая дорожка"},
    {labels: {sale: false, like: true, new: true}, isLiked: false, isAvailable: true, isInShowroom: false, title: 'Беговая дорожка CardioPower S44', rating: 4.5, oldPrice: '189.999', newPrice: '169.999', id: '10', img: Trainer2, category: "Беговая дорожка"}
];