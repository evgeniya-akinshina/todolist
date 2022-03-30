export type UsersState = {
	list: User[]
	loading: boolean
	mainUserId: string
}

export type User = {
	id: string
	name: string
	username: string
	todos: Todo[]
}

export type Todo = {
	userId: number
	id: number
	title: string
	createAt: Date
	completed: boolean
}

export enum UsersTypes {
	FETCH_USERS__START = 'users|fetchUsersStart',
	FETCH_USERS__SUCCESS = 'users|fetchTodosSuccess',
	FETCH_USERS__FAILURE = 'users|fetchUsersFailure',
	SET_USER_ID = 'users|setUsersId ',
	FETCH_TODOS__START = 'todos|fetchTodosStart',
	FETCH_TODOS__SUCCESS = 'todos|fetchTodosSuccess',
	FETCH_TODOS__FAILURE = 'todos|fetchTodosFailure',
}

export type FetchUsersStart = {
	type: UsersTypes.FETCH_USERS__START
}

export type FetchUsersSuccess = {
	type: UsersTypes.FETCH_USERS__SUCCESS
}

export type FetchUsersFailure = {
	type: UsersTypes.FETCH_USERS__FAILURE
}

export type SetUsersId = {
	type: UsersTypes.SET_USER_ID
	payload: {
		mainUserId: string
	}
}

export type FetchTodosStart = {
	type: UsersTypes.FETCH_TODOS__START
}

export type FetchTodosSuccess = {
	type: UsersTypes.FETCH_TODOS__SUCCESS
	payload: User[]
}

export type FetchTodosFailure = {
	type: UsersTypes.FETCH_TODOS__FAILURE
}

export type UsersActions =
	| FetchUsersStart
	| FetchUsersSuccess
	| FetchUsersFailure
	| SetUsersId
	| FetchTodosStart
	| FetchTodosSuccess
	| FetchTodosFailure
