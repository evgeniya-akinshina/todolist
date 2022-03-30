import * as Types from './types'

const logout = (payload: Types.LogoutAction['payload']): Types.LogoutAction => ({
	type: Types.CommonActionTypes.LOGOUT,
	payload,
})

export const actions = {
	logout,
}
