import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { GithubIcon, LinkArrow } from './icons';
import projImg from '../assets/proj1.jpg'
import proj2Img from '../assets/proj2.png'
import proj3Img from '../assets/proj3.png'

import { AnimatePresence, motion } from 'framer-motion';
import Transition from './Transition';
import Navbar from './Navbar';
import Education from './Education';
import Techs from './Techs';
const Project= ({type,title,img,link,github})=>{

  return (
  <motion.article className='p-3 relative w-full flex flex-col items-center justify-center rounded-2xl border-solid border-2 border-white bg-black shadow-xl shadow-sky-600
  '
  initial={{y:150}}
  whileInView={{y:0}}
  transition={{duration:0.5,type:"spring"}}
  viewport={{once:true}}
  
  >
    <a href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
      <img  src={img} alt={title} className='w-full h-auto '/>
    </a>
    
    <div className='w-full flex flex-col items-start justify-between px-6 mt-4'>
      <a href={link} target='_blank'>
        <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
      </a>
      <span className='!text-white/60 font-bold '>{type}</span>
    </div>
     <div className='my-4 flex gap-4 items-center justify-center '>
     <a href={github} target='_blank'> <GithubIcon className=' fill-white'/> </a>
     <a href={link} target='_blank' className= 'text-lg flex font-semibold border-b-4 border-black hover:border-sky-500 transition:[border] ease-in duration-100'>Visit <LinkArrow className='w-4 ml-1'/></a>
     </div>
  </motion.article>
  );

}

const Projects = () => {
  return (
    <>
    <div className=' text-white w-full  bg-black flex flex-col justify-center items-center ' >
       <Layout className='pt-16'>
        <AnimatedText text="Imagination Trumps Knowledge!" className=' lg:!text-7xl sm:!text-3xl xs:!text-2xl mb-16'/>
        <div className='grid grid-cols-12 gap-24  sm:grid-cols-4 lg:grid-cols-8'>
          <div className='col-span-4'>
            <Project type="React | Tailwind | Framer-Motion" title="Personal Portfolio" img={projImg} link="https://sayan-batabyal-portfolio.netlify.app/" github="https://github.com/Sayan-Batabyal/personal-portfolio" />
          </div>
          <div className='col-span-4'>
            <Project type="React | Saas | Express | MongoDB" title="Hotel Admin App" img={proj2Img} link="https://hotels-admin-portal.netlify.app/" github="https://github.com/Sayan-Batabyal/hotel-book-admin" />
          </div>
          <div className='col-span-4'>
            <Project type="Javascript | P5.js" title="Sorting Visualiser" img={proj3Img} link="https://merge-sort-visualiser.netlify.app/" github="https://github.com/Sayan-Batabyal/Merge_Sort" />
          </div>

        </div>
       </Layout>
    </div>
    </>
  )
}

export default Projects