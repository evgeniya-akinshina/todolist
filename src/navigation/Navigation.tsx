import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as Pages from '../pages'
import { Props } from './types'

export const Navigation = ({ id }: Props) => {
	return (
		<BrowserRouter>
			{id && (
				<Routes>
					<Route path='/' element={<Pages.LoginPage />} />
					<Route path='/home' element={<Pages.HomePage />} />
					<Route path='/statistic' element={<Pages.StatisticPage />} />
					<Route path='/home/users' element={<Pages.UsersPage />} />
					<Route path='/user/:id' element={<Pages.UserPage />} />
					<Route path='/home/todos' element={<Pages.TodosPage />} />
				</Routes>
			)}
			{!id && (
				<Routes>
					<Route path='/' element={<Pages.LoginPage />} />
				</Routes>
			)}
		</BrowserRouter>
	)
}
