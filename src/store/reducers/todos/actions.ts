import * as Types from './types'

const getTodosStart = (): Types.TodoStart => ({
	type: Types.TodosTypes.FETCH_TODOS__START,
})

const getTodosSuccess = (payload: Types.TodoSuccess['payload']): Types.TodoSuccess => ({
	type: Types.TodosTypes.FETCH_TODOS__SUCCESS,
	payload,
})

const getTodosFailure = (): Types.TodoFailure => ({
	type: Types.TodosTypes.FETCH_TODOS__FAILURE,
})

export const actions = {
	getTodosStart,
	getTodosSuccess,
	getTodosFailure,
}
