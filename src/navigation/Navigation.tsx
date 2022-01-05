import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as Pages from '../pages'

export const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Pages.HomePage />} />
				<Route path='/statistic' element={<Pages.StatisticPage />} />
				<Route path='/users' element={<Pages.UsersPage />} />
            <Route path='/user' element={<Pages.UserPage />} />
			</Routes>
		</BrowserRouter>
	)
}