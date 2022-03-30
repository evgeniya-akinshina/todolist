import { connect } from 'react-redux'
import { Navigation as Component } from './Navigation'
import { RootState } from 'src/store/reducers'

export const mapStateToProps = (state: RootState) => ({
	id: state.users.mainUserId,
})

export const mapActionsToProps = {}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const Navigation = connector(Component)
