import { RootState } from '..'
import { User } from './types'

export const getMainUsers = (state: RootState): User => {
	return state.users.list.find(user => user.id === state.users.mainUserId)!
}
