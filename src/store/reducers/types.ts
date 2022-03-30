export enum CommonActionTypes {
	LOGOUT = 'common|logout',
}

export type LogoutAction = {
	type: CommonActionTypes.LOGOUT
	payload: boolean
}

export type CommonActions = LogoutAction
