import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { LinkArrow } from './icons'
import Transition from './Transition'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Transition/>
    <div className='text-white flex items-center w-full min-h-fit'>
       <Layout className='pt-30'>
       <AnimatedText text="H e l l o, &nbsp; I &nbsp; a m" className='text-left !text-4xl !text-sky-500' />
        <div className="flex items-center justify-between w-full">
          <div className=''>
            <AnimatedText text="S a y a n Batabyal" className='!text-left' />
            <p className='my-4 text-base font-medium font-mono'>I'm a third-year software development student with a passion for creating elegant solutions that solve real-world problems. My expertise lies in, and I'm constantly seeking opportunities to develop my skills in [list relevant skills or methodologies]. I have experience working on [list types of projects or applications], and I'm committed to staying up-to-date with the latest industry trends. Feel free to check out my portfolio or connect with me to learn more about my work.</p>
          </div>
        </div>
        <div className='flex gap-3'>
            <a href="../public/sayan.pdf" className='flex items-center bg-white text-black p-2.5 px-6 rounded-lg text-lg font-bold hover:bg-sky-500 transition:all ease-in duration-100 ' download={true}>Resume <LinkArrow className='w-6 ml-1'/></a>
            <a href='mailto:sayanbatabyal.mav@gmail.com' className='flex items-center font-bold ml-4 border-b-0 border-sky-500 hover:border-b-4 transition:[border] ease-in duration-100'>Connect</a>
          </div>
        </Layout>
    </div>
    </>
  )
}

export default Home