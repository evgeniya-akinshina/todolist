export type UsersState = {
	data: User[]
	error: string
}

export type User = {
	id: number
	name: string
	username: string
}

export enum UsersTypes {
	FETCH_USERS__START = 'users|fetchTodosStart',
	FETCH_USERS__SUCCESS = 'users|fetchTodosSuccess',
	FETCH_USERS__FAILURE = 'users|fetchTodosFailure',
}

export type UserStart = {
	type: UsersTypes.FETCH_USERS__START
}

export type UserSuccess = {
	type: UsersTypes.FETCH_USERS__SUCCESS
	payload: User[]
}

export type UserFailure = {
	type: UsersTypes.FETCH_USERS__FAILURE
}

export type UsersActions = UserStart | UserSuccess | UserFailure