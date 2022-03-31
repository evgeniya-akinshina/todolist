import * as Types from './types'

const logout = (withReset: boolean = false): Types.LogoutAction => ({
	type: Types.CommonActionTypes.LOGOUT,
	payload: {
		withReset,
	},
})

export const actions = {
	logout,
}
