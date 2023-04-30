import { motion, useScroll } from 'framer-motion'
import React from 'react'

const LiIcon = ({refer}) => {
    const {scrollYProgress}=useScroll({
        target:refer,
        offset:["start end","start center"]
    })
  return (
    <figure className='absolute left-0 stroke-white'>
        <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width={"75"} height={"75"} viewBox='0 0 100 100'>
            
            <circle cx={"75"} cy={"50"} r={"20"} className='stroke-orange-700 stroke-1 fill-none'/>
            <motion.circle cx={"75"} cy={"50"} r={"20"} className='stroke-[5px] fill-black
            ' style={{pathLength : scrollYProgress}}/>
            <circle cx={"75"} cy={"50"} r={"10"} className='stroke-1 animate-pulse fill-sky-500'/>
        </svg>
    </figure>
  )
}

export default LiIcon