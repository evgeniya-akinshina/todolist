import axios, { Axios } from 'axios'
import { ServerUser } from './types'

class Controller {
	constructor(private readonly apiServise: Axios) {}

	fetchUsers = () => {
		return this.apiServise.get<ServerUser[]>('https://jsonplaceholder.typicode.com/users')
	}
}

export const UserController = new Controller(axios)
