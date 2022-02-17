import React from 'react'
import { Params, useLocation, useNavigate, useParams } from 'react-router-dom'
import { NavigateFunction } from 'react-router'
import { ConnectedComponent } from 'react-redux'

export function withRouter(Component: React.ComponentClass<any, any> | ConnectedComponent<any, any>) {
	return (props: any) => {
		const location = useLocation()
		const navigate = useNavigate()
		const params = useParams()

		return <Component {...props} router={{ location, navigate, params }} />
	}
}

export type WithRouter = {
	router: {
		location: Location
		navigate: NavigateFunction
		params: Readonly<Params<string>>
	}
}
