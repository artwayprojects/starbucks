const GAMES_DB = [
    { id: '1', name: 'game1', description: 'game description' },
    { id: '2', name: 'game2', description: 'game description' },
    { id: '3', name: 'game3', description: 'game description' },
    { id: '4', name: 'game4', description: 'game description' },
    { id: '5', name: 'game5', description: 'game description' },
    { id: '6', name: 'game6', description: 'game description' },
    { id: '7', name: 'game7', description: 'game description' },
    { id: '8', name: 'game8', description: 'game description' },
    { id: '9', name: 'game9', description: 'game description' },
    { id: '10', name: 'game10', description: 'game description' },
    { id: '11', name: 'game11', description: 'game description' },
    { id: '12', name: 'game12', description: 'game description' },
    { id: '13', name: 'game13', description: 'game description' },
    { id: '14', name: 'game14', description: 'game description' },
    { id: '15', name: 'game15', description: 'game description' },
    { id: '16', name: 'game16', description: 'game description' },
]

export const getAllGames = () => {
    return GAMES_DB
}

export const getGameById = (id) => GAMES_DB.find((game) => game.id === id)

export const getGamesByName = (name) =>
    GAMES_DB.filter((game) => game.name.includes(name))

export class User {
    constructor(user) {
        this.db = new UsersDB()
        this.user = this.encrypt(user)
    }

    static signOut() {
        sessionStorage.removeItem('currentUser', JSON.stringify(this.user))

        window.location.reload()

        return true
    }

    encrypt(user) {
        return {
            ...user,
            password: btoa(user.password),
        }
    }

    signUp() {
        if (!this.db.findUser(this.user)) {
            this.db.addUser(this.user)

            sessionStorage.setItem('currentUser', JSON.stringify(this.user))

            window.location.reload()

            return true
        } else {
            alert('User already exists, please log in')

            return false
        }
    }

    logIn() {
        if (this.db.findUser(this.user)) {
            sessionStorage.setItem('currentUser', JSON.stringify(this.user))

            window.location.reload()

            return true
        } else {
            alert('User does not exists, please sign up')

            return false
        }
    }
}

export class UsersDB {
    static getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('currentUser'))?.username
    }

    getAllUsers() {
        return JSON.parse(localStorage.getItem('all_users')) || []
    }

    findUser(user) {
        return this.getAllUsers().find(
            ({ username, password }) =>
                username === user.username && password === user.password
        )
    }

    addUser(user) {
        const existingUsers = this.getAllUsers()
        const allUsers = [...existingUsers, user]

        localStorage.setItem('all_users', JSON.stringify(allUsers))

        return allUsers
    }
}
