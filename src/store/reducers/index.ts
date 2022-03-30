import { combineReducers, Reducer } from 'redux'
import { CommonActions, CommonActionTypes, LogoutAction } from './types'
import { UsersActions, usersReducer } from './users'
import { initialState as userReducerInitiaState } from './users/reducer'

const allReducers = combineReducers({
	users: usersReducer,
})

export type RootState = ReturnType<typeof allReducers>
export type RootActions = UsersActions | CommonActions

export const rootReducer: Reducer<RootState, RootActions> = (state, actions) => {
	if ((actions.type as any) === CommonActionTypes.LOGOUT) {
		if ((actions as LogoutAction).payload) {
			return allReducers(undefined, actions)
		}

		const { users } = state!

		state = {
			users: {
				...userReducerInitiaState,
				list: users.list,
			},
		}
	}

	return allReducers(state, actions)
}
