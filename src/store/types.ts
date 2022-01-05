import { rootReducer } from './reducers'
import { TodosActions } from './reducers/todos'
import {UsersActions} from './reducers/users'

export type RootState = ReturnType<typeof rootReducer>
export type RootActions = UsersActions | TodosActions
