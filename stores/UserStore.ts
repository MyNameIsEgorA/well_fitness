import {makeAutoObservable} from 'mobx'

type UserNotifications = {
    statistic: number,
    liked: number,
    cart: number,
}

const data: UserNotifications = {
    statistic: 9,
    liked: 4,
    cart: 7
}

class UserStore {

    constructor() {
        makeAutoObservable(this)
    }

    private userData: UserNotifications = {
        statistic: 0,
        liked: 0,
        cart: 0,
    }

    getUserDataAPI = async (id: number) => {
    // Ультралютый запрос на несуществующий сервер
        this.userData = data
    }

    get getUserData (): UserNotifications {
        return this.userData
    }
}

const UserData: UserStore = new UserStore()
export default UserData