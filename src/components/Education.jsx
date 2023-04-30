import {motion,  useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import Layout from './Layout'

const Details=({position,company,time,address,marks})=>{
    const ref=useRef(null)
    return (
    <li ref={ref} className='my-9 first:mt-0 last:mb-0  w-[60%] mx-auto flex flex-col items-start justify-center'>
        <LiIcon refer={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.7,type:"spring"}}
        viewport={{once:true}}
        >
            <h3 className='capitalize xs:text-lg sm:text-xl font-bold text-2xl '>{company}</h3>
            <h4 className='capitalize xs:text-xs sm:text-sm  text-xl font-medium text-white/85 '>{position}</h4>
            <h4 className='capitalize xs:text-xs sm:text-sm text-xl font-medium text-white/75 '>{marks}</h4>
            <span className='capitalize md:text-sm  font-medium text-white/65 '>
                {time} | {address}
            </span>
        </motion.div>
    </li>);
}

const Education = () => {
   const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center"]
    })
  return (


    <div  className='mb-[100px] mt-10' >
        <h2 className='font-bold text-8xl text-white  py-10 sm:mt-10 w-full text-center lg:!text-7xl sm:!text-3xl xs:!text-2xl'>Education</h2>
        <div ref={ref} className='w-[75%]  mx-auto relative lg:w-[90%] md:w-full  '>
            <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9  top-0 w-[4px] h-full bg-white origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='w-full ml-4 flex flex-col items-start justify-between xs:ml-2'>
                <Details position={"B.Tech. in Computer SCience"} company="Lovely Professional University" time={"2020-2024"} address={"Phagwara, India"} marks="CGPA: 8.88 / 10.0" />
                <Details position={"PCM with Computer Science"} company="Hem Sheela Model School" time={"Grad. 2019"} address={"Durgapur, India"} marks="Cum. Per: 95%" />
                <Details position={"ICSE Science"} company="St. Michael's School" time={"Grad. 2017"} address={"Durgapur, India"} marks="Cum. Per: 93.5%" />
            </ul>
        </div>

    </div>

  )
}

export default Education