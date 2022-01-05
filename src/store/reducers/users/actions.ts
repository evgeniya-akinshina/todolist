import * as Types from './types'

const getUsersStart = (): Types.UserStart => ({
	type: Types.UsersTypes.FETCH_USERS__START,
})

const getUsersSuccess = (payload: Types.UserSuccess['payload']): Types.UserSuccess => ({
	type: Types.UsersTypes.FETCH_USERS__SUCCESS,
   payload,
})

const getUsersFailure = (): Types.UserFailure => ({
	type: Types.UsersTypes.FETCH_USERS__FAILURE,
})

export const actions = {
	getUsersStart,
	getUsersSuccess,
	getUsersFailure,
}