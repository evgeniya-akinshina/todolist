export type UsersState = {
	users: User[]
	loading: boolean
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
	FETCH_USERS__SUCCESS = 'users|fetchUsersSuccess',
	FETCH_USERS__FAILURE = 'users|fetchUsersFailure',
}

export type FetchUsersStart = {
	type: UsersTypes.FETCH_USERS__START
}

export type FetchUsersSuccess = {
	type: UsersTypes.FETCH_USERS__SUCCESS
	payload: User[]
}

export type FetchUsersFailure = {
	type: UsersTypes.FETCH_USERS__FAILURE
}

export type UsersActions = FetchUsersStart | FetchUsersSuccess | FetchUsersFailure
