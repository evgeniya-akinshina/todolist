import { UsersState as State, UsersTypes } from './types'
import { RootActions } from '../../types'

const initialState: State = {
	users: [],
	loading: false,
}

export const usersReducer = (state: State = initialState, action: RootActions): State => {
	switch (action.type) {
		case UsersTypes.FETCH_USERS__START:
			return {
				...state,
				loading: true,
			}
		case UsersTypes.FETCH_USERS__SUCCESS:
			return {
				...state,
				users: action.payload,
				loading: false,
			}
		case UsersTypes.FETCH_USERS__FAILURE:
			return {
				...state,
				loading: false,
			}

		default:
			return state
	}
}
