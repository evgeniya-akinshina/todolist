export enum CommonActionTypes {
	LOGOUT = 'common|logout',
}

export type LogoutAction = {
	type: CommonActionTypes.LOGOUT
	payload: {
		withReset: boolean
	}
}

export type CommonActions = LogoutAction
