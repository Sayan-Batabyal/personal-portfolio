import { motion } from 'framer-motion'
import React from 'react'
import { IconCpp, IconExpress, IconHtml5, IconJS, IconNodeJs, IconReact, IconSaas, IconTail, Mongo } from './icons'
import Layout from './Layout'
 
const ItemSkills= ({text,title,x,y})=>{
    return(
        <motion.div className='flex flex-col font-bold items-center justify-center rounded-full absolute text-6xl cursor-pointer' 
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        viewport={{once:true}}
        transition={{duration:1.5}}
        >
        <span className='!text-sm md:!text-xs xs:hidden'>{title}</span>
           {text}
        </motion.div>
    )
}

const Techs = () => {
  return (
    <>
    <Layout className='!pt-2'>
    <h2 className=' font-bold text-8xl mt-64 md:mt-32 w-full text-center lg:!text-7xl sm:!text-3xl xs:!text-2xl'>Skills</h2>
    <div className='bg-circulardark sm:bg-circulardarkSm  lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] w-full h-screen relative flex items-center justify-center rounded-full '>
        <motion.div className='flex text-6xl items-center justify-center rounded-full cursor-pointer' 
        whileHover={{scale:1.05}}
        >    
       <IconCpp className='fill-purple-500 xs:w-7'/>
        </motion.div>
        <ItemSkills text={<IconReact className='fill-sky-400 mt-1 xs:w-9'/>} title="React JS" x="-12vw" y="-18vw"/>
        <ItemSkills text={<IconHtml5 className='fill-orange-500 mt-1 xs:w-9 '/>} title="HTML" x="-19vw" y="2vw"/>
        <ItemSkills text={<IconJS className='fill-yellow-500 mt-1 xs:w-10'/>} title="JavaScript" x="20vw" y="8vw"/>
        <ItemSkills text={<IconSaas className='mt-1 xs:w-10'/>} title="SaSS" x="-12vw" y="15vw"/>
        <ItemSkills text={<IconNodeJs className='fill-green-600 mt-1 xs:w-9'/>} title="Node JS" x="12vw" y="-2vw"/>
        <ItemSkills text={<IconTail className='mt-0 xs:w-10'/>} title="Tailwind" x="1vw" y="10vw"/>
        <ItemSkills text={<IconExpress className='fill-gray-400 -mt-1 xs:w-10'/>} title="Express" x="7vw" y="-14vw"/>
        <ItemSkills text={<Mongo className=' mt-1 xs:w-11'/>} title="MongoDB" x="-6vw" y="-9vw"/>
        
    </div>
    </Layout>
    </>
  )
}

export default Techs