import { UsersState as State, UsersTypes } from './types'
import { RootActions } from '../../types'

const initialState: State = {
	data: [],
	error: '',
}

export const usersReducer = (state: State = initialState, action: RootActions): State => {
	switch (action.type) {
		case UsersTypes.FETCH_USERS__START:
			return {
				...state,
				error: '',
			}
		case UsersTypes.FETCH_USERS__SUCCESS:
			return {
				...state,
				data: action.payload,
			}
		case UsersTypes.FETCH_USERS__FAILURE:
			return {
				...state,
				error: 'Error!',
			}

		default:
			return state
	}
}