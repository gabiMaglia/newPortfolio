import {useEffect} from 'react'
import anime from "animejs/lib/anime.es.js";
const useCardTransition = (target) => {
  return (
    useEffect(() => {
      
        anime({
          targets: 'section',
          opacity:[-1, 1] ,
          
          duration: 500,
          easing: 'easeOutQuad',
          endDelay: 100,
        });
        
        return () => {
          anime({
            targets: 'section',
            opacity:[-1, 1] ,
        
            duration: 500,
            easing: 'easeOutQuad',
            endDelay: 100,
          });
        }
    })
  )
}

export default useCardTransition