import React from 'react'
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { MenuCard } from '../../components/MenuCard/MenuCard'
import styles from '../Home/HomePage.module.sass'

export class TodosPage extends React.Component {
	render() {
		return (
			<div className={styles.content}>
				<div className={styles.content_header}>
					<Header canGoBack />
					<Title title={`Hey Jane,\nthis is your to-do list.`} />
					<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
						<MenuCard title={'School'} subTitle={'7 tasks'} />
						<MenuCard title={'Work'} subTitle={'4 tasks'} />
						<MenuCard title={'Sport'} subTitle={'2 tasks'} />
						<MenuCard title={'Home'} subTitle={'11 tasks'} />
					</div>
				</div>
				<div>
					<Button />
				</div>
			</div>
		)
	}
}
