import React, { useState } from 'react'
import AnimatedText from './AnimatedText'
import Layout from './Layout'
import AnimateNumber from './AnimateNumber'
import Techs from './Techs'
import Education from './Education'
import Transition from './Transition'
import { motion } from 'framer-motion'

const Skills = () => {

  return (
    <motion.div
    initial={{y:150}}
  whileInView={{y:0}}
  transition={{duration:0.5,type:"spring"}}
  viewport={{once:false}}
    >

    <div className='text-white w-full bg-black flex flex-col justify-center items-center'>
     <Layout>
      <AnimatedText text="Passion Fuels Purpose !" className='lg:!text-6xl sm:!text-3xl xs:!text-2xl'/>
       <div className=' mt-10 col-span-2 flex gap-10  sm:gap-4 items-center justify-center'>
        <div className=''>
         <p>Rated</p>
        <span className=' text-7xl lg:!text-6xl sm:!text-3xl xs:!text-2xl font-bold'><AnimateNumber value={1702}/></span>
        <p>on</p>
        <p>LeetCode</p>
        </div>
        <div>
         <p>Rated</p>
        <span className='text-7xl lg:!text-6xl sm:!text-3xl xs:!text-2xl font-bold'><AnimateNumber value={3}/>*</span>
        <p>on</p>
        <p>CodeChef</p>
        </div>
        <div>
         <p>Solved</p>
        <span className='text-7xl lg:!text-6xl sm:!text-3xl xs:!text-2xl font-bold'><AnimateNumber value={1501}/>+</span>
        <p>DSA</p>
        <p>Problems</p>
        </div>
       </div>
       <Techs/>
       <Education/>
       </Layout>
    </div>

    </motion.div>

  )
}

export default Skills