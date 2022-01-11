import { combineReducers } from 'redux'
import { todosReducer } from './todos'
import { usersReducer } from './users'

export const rootReducer = combineReducers({
   users: todosReducer,
	todos: usersReducer,
})
