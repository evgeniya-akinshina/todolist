import { connect } from 'react-redux'
import { RootState } from '../../store/types'
import { UsersPage as Component } from './UsersPage'

export const mapStateToProps = (state: RootState) => ({
	users: state.users.users,
})

export const mapActionsToProps = {}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const UsersPage = connector(Component)
