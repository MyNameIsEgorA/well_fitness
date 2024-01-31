type trainerLabels = {
    sale: boolean,
    like: boolean,
    new: boolean,
}

export type TrainerOnList = {
    labels: trainerLabels,
    isLiked: boolean,
    isAvailable: boolean,
    isInShowroom: boolean,
    title: string,
    rating: number,
    oldPrice: string,
    newPrice: string,
    id: string,
    img: any,
    category: string,
}
