import axios, { Axios } from 'axios'
import { Todo } from 'src/store/reducers/users'

class Controller {
	constructor(private readonly apiServise: Axios) {}

	fetchTodos = () => {
		return this.apiServise.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
	}
}

export const TodoController = new Controller(axios)
