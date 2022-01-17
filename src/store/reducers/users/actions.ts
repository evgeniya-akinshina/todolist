import * as Types from './types'

const fetchUsersStart = (): Types.FetchUsersStart => ({
	type: Types.UsersTypes.FETCH_USERS__START,
})

const fetchUsersSuccess = (payload: Types.FetchUsersSuccess['payload']): Types.FetchUsersSuccess => ({
	type: Types.UsersTypes.FETCH_USERS__SUCCESS,
	payload,
})

const fetchUsersFailure = (): Types.FetchUsersFailure => ({
	type: Types.UsersTypes.FETCH_USERS__FAILURE,
})

export const actions = {
	fetchUsersStart,
	fetchUsersSuccess,
	fetchUsersFailure,
}
