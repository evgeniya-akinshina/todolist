import { rootReducer } from './reducers'
import { UsersActions } from './reducers/users'

export type RootState = ReturnType<typeof rootReducer>
export type RootActions = UsersActions
