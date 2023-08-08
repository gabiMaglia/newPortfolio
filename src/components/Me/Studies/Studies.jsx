import React from 'react'
import './studies.css'
import { motion } from 'framer-motion'

import useCardTransition from '../../../anim/cardTransition'
import Card1 from '../../common/Card1/Card1'

const Studies = () => {
  useCardTransition()

  
    const studies = [{
      title : 'Full Stack Jr. Diplomature',
      institution: 'UTN',
      startDate: 'Febraury/2022',
      endDate: 'August/2022',
      description: 'In this course i[ve] learned introductions to develope a website using ReactJS & sturessJS'
    },{
      title : 'Full Stack Jr. Diplomature',
      institution: 'UTN',
      startDate: 'Febraury/2022',
      endDate: 'August/2022',
      description: 'In this course i[ve] learned introductions to develope a website using ReactJS & sturessJS'
    },{
      title : 'Full Stack Jr. Diplomature',
      institution: 'UTN',
      startDate: 'Febraury/2022',
      endDate: 'August/2022',
      description: 'In this course i[ve] learned introductions to develope a website using ReactJS & sturessJS'
    },]
  return (
    
    <section className='pb-5 mb-5'>
       
      <motion.div className='slider-cont'>
        <motion.div className="slider" drag='x' dragConstraints={{right: 0, left:0}}> 

        {studies.map((e, key) => {
            return(
              <motion.div className='slider-item'>
  
  <Card1
        key = {key}
        title={e.title}
        activity={e.activity}
        startDate={e.startDate}
        endDate={e.endDate}
        description={e.description}
      />
           
              </motion.div>
           )
        
          })}
        
       
          </motion.div>
        
      </motion.div>
    </section>

  )
}

export default Studies