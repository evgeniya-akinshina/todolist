import { ServerUser } from './types'

export const UserFormatter = new (class {
   afterfetchUsers = (users: ServerUser[], todos: ) => {
		return users.map(user => ({
         id: user.id.toString(),
         name: user.name,
         username: user.username,
         todos: todos[user.id],
      }))

	}
})()
