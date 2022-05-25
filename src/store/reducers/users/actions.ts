import * as Types from './types'

const fetchUsersStart = (): Types.FetchUsersStart => ({
	type: Types.UsersTypes.FETCH_USERS__START,
})

const fetchUsersSuccess = (): Types.FetchUsersSuccess => ({
	type: Types.UsersTypes.FETCH_USERS__SUCCESS,
})

const fetchUsersFailure = (): Types.FetchUsersFailure => ({
	type: Types.UsersTypes.FETCH_USERS__FAILURE,
})

const setUsersId = (userId: string): Types.SetUsersId => ({
	type: Types.UsersTypes.SET_USER_ID,
	payload: {
		mainUserId: userId,
	},
})

const fetchTodosStart = (): Types.FetchTodosStart => ({
	type: Types.UsersTypes.FETCH_TODOS__START,
})

const fetchTodosSuccess = (payload: Types.FetchTodosSuccess['payload']): Types.FetchTodosSuccess => ({
	type: Types.UsersTypes.FETCH_TODOS__SUCCESS,
	payload,
})

const fetchTodosFailure = (): Types.FetchTodosFailure => ({
	type: Types.UsersTypes.FETCH_TODOS__FAILURE,
})

export const actions = {
	fetchUsersStart,
	fetchUsersSuccess,
	fetchUsersFailure,
	setUsersId,
	fetchTodosStart,
	fetchTodosSuccess,
	fetchTodosFailure,
}
