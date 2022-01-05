export type TodosState = {
	data: Todo[]
	error: string
}

export type Todo = {
	userId: number
	id: number
	title: string
}

export enum TodosTypes {
	FETCH_TODOS__START = 'todos|fetchTodosStart',
	FETCH_TODOS__SUCCESS = 'todos|fetchTodosSuccess',
	FETCH_TODOS__FAILURE = 'todos|fetchTodosFailure',
}

export type TodoStart = {
	type: TodosTypes.FETCH_TODOS__START
}

export type TodoSuccess = {
	type: TodosTypes.FETCH_TODOS__SUCCESS
	payload: Todo[]
}

export type TodoFailure = {
	type: TodosTypes.FETCH_TODOS__FAILURE
}

export type TodosActions = TodoStart | TodoSuccess | TodoFailure