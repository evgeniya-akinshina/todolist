import React from 'react'
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { Todo } from '../../components/Todo/Todo'
import styles from '../Home/HomePage.module.sass'
import imgWork from '../../img/work.png'
import imgHouse from '../../img/house.png'
import imgCup from '../../img/cup.png'
import imgDegree from '../../img/degree.png'

export class TodosPage extends React.Component {
    render() {
        return <div className={styles.content}>
            <div className={styles.content_header}>
                <Header showArrow />
                <Title title={`Hey Jane,\nthis is your to-do list.`} />
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>
                    <Todo title={'School'} subTitle={'7 tasks'} img={imgDegree} />
                    <Todo title={'Work'} subTitle={'4 tasks'} img={imgWork} />
                    <Todo title={'Sport'} subTitle={'2 tasks'} img={imgCup} />
                    <Todo title={'Home'} subTitle={'11 tasks'} img={imgHouse} />
                </div>
            </div>
            <div>
                <Button />
            </div>
        </div>
    }
}