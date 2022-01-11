import { connect } from 'react-redux'
import { RootState } from '../../store/types'
import { UserPage as Component } from './UserPage'

export const mapStateToProps = (state: RootState) => ({})

export const mapActionsToProps = {}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const UserPage = connector(Component)
