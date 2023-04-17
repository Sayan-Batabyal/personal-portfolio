import {motion,  useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details=({position,company,time,address,marks})=>{
    const ref=useRef(null)
    return (<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-center'>
        <LiIcon refer={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.7,type:"spring"}}
        viewport={{once:true}}
        >
            <h3 className='capitalize font-bold text-2xl '>{company}</h3>
            <h4 className='capitalize text-xl font-medium text-white/85 '>{position}</h4>
            <h4 className='capitalize text-xl font-medium text-white/75 '>{marks}</h4>
            <span className='capitalize font-medium text-white/65 '>
                {time} | {address}
            </span>
        </motion.div>
    </li>);
}

const Education = () => {
   const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div  className='m-64' >
        <h2 className='font-bold text-8xl mb-32 w-full text-center text-white'>Education</h2>
        <div ref={ref} className='w-[75%]  mx-auto relative'>
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9  top-0 w-[2px] h-full bg-white origin-top' />
            <ul className='w-full ml-0 flex flex-col items-start text-justify justify-between'>
                <Details position={"B.Tech. in Computer SCience"} company="Lovely Professional University" time={"2020-2024"} address={"Phagwara, India"} marks="CGPA: 8.88 / 10.0" />
                <Details position={"PCM with Computer Science"} company="Hem Sheela Model School" time={"Grad. 2019"} address={"Durgapur, India"} marks="Cum. Per: 95%" />
                <Details position={"ICSE Science"} company="St. Michael's School" time={"Grad. 2017"} address={"Durgapur, India"} marks="Cum. Per: 93.5%" />
            </ul>
        </div>

    </div>
  )
}

export default Education