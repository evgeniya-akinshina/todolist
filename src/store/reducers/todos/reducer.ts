import { TodosState as State, TodosTypes } from './types'
import { RootActions } from '../../types'

const initialState: State = {
	data: [],
	error: '',
}

export const todosReducer = (state: State = initialState, action: RootActions): State => {
	switch (action.type) {
		case TodosTypes.FETCH_TODOS__START:
			return {
				...state,
				error: '',
			}
		case TodosTypes.FETCH_TODOS__SUCCESS:
			return {
				...state,
				data: action.payload,
			}
		case TodosTypes.FETCH_TODOS__FAILURE:
			return {
				...state,
				error: 'Error!',
			}

		default:
			return state
	}
}
