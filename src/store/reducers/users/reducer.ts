import { RootActions } from '..'
import { UsersState as State, UsersTypes } from './types'

export const initialState: State = {
	list: [],
	loading: false,
	mainUserId: '',
}

export const usersReducer = (state: State = initialState, action: RootActions): State => {
	switch (action.type) {
		case UsersTypes.FETCH_USERS__START:
		case UsersTypes.FETCH_TODOS__START:
			return {
				...state,
				loading: true,
			}
		case UsersTypes.FETCH_USERS__SUCCESS:
			return {
				...state,
				loading: false,
			}
		case UsersTypes.FETCH_TODOS__SUCCESS:
			return {
				...state,
				list: action.payload,
				loading: false,
			}
		case UsersTypes.FETCH_USERS__FAILURE:
		case UsersTypes.FETCH_TODOS__FAILURE:
			return {
				...state,
				loading: false,
			}

		case UsersTypes.SET_USER_ID:
			return {
				...state,
				mainUserId: action.payload.mainUserId,
			}

		default:
			return state
	}
}
