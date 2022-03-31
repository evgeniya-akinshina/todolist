import { ConnectedProps } from 'react-redux'
import { User } from 'src/store/reducers/users'
import { WithRouter } from '../../HOCs/withRouter'
import { connector } from './container'

export type Props = ConnectedProps<typeof connector> & WithRouter & {}

export type State = {
	userId: string
	hasPreviousUsers: boolean
	serverUsers: ServerUser[] | User[]
}

export type ServerUser = {
	id: number | string
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}
