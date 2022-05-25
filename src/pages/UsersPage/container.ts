import { connect } from 'react-redux'
import { RootState } from 'src/store/reducers'

import { UsersPage as Component } from './UsersPage'

export const mapStateToProps = (state: RootState) => ({
	users: state.users.list,
})

export const mapActionsToProps = {}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const UsersPage = connector(Component)
