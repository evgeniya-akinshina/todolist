import React from 'react'
import ReactDOM from 'react-dom'
import { ComponentApp } from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.sass'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ComponentApp />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
