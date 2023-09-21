import React from 'react'
import useCardTransition from '../../../anim/cardTransition'
import Card1 from '../../common/Card1/Card1'

import styles from "./studies.module.css"

const studies = [{

  title: 'Full Stack Jr. Diplomature',
  institution: 'UTN',
  startDate: 'Febraury/2022',
  endDate: 'August/2022',
  description: 'introductions to develope websites using ReactJS & ExpressJS'
}, {
  title: 'Yo Programo',
  institution: 'Argentina Programa',
  startDate: 'August/2022',
  endDate: 'January/2023',
  description: 'introductions to develope websites using Amgular & Java SpringBoot'
}, {
  title: 'Bootcamp Full Stack developer',
  institution: 'Soy Henry',
  startDate: 'June/2023',
  endDate: 'Present Day',
  description: 'advance develope techniques for websites using ReactJS & ExpressJS'
},]

const Studies = () => {

  

  useCardTransition()
  return (

    <section className={styles.studiesCont}>

      {studies.map((e, key) => {
        return (
          <Card1
            key={key}
            title={e.title}
            activity={e.activity}
            startDate={e.startDate}
            endDate={e.endDate}
            description={e.description}
          />
        )
      })}
    </section>

  )
}

export default Studies