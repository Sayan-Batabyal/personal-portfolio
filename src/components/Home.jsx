import React, { useEffect } from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { LinkArrow } from './icons'
import Transition from './Transition'

const Home = () => {
  
  return (
    <>
    <Transition/>
    <div className='text-white flex items-center w-full min-h-fit'>
       <Layout className='pt-30 md:pt-[70px] sm:pt-[100px]'>
       <AnimatedText text="H e l l o, &nbsp; I &nbsp; a m" className='text-left !text-4xl !text-sky-500 xl:!text-6xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-4xl ' />
        <div className="flex items-center justify-between w-full">
          <div className=''>
            <AnimatedText text="S a y a n Batabyal" className='!text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl ' />
            <p className='my-4 md:text-sm sm:text-xs text-base font-medium font-mono text-justify'>I'm an aspiring <strong>Software Developer</strong> with the passion for creating elegant solutions that solve <strong>real-world</strong> problems. My expertise lies in problem solving, and I am constantly seeking opportunities to develop my skills. I have experience working with <strong>MERN stack</strong>, and I'm committed to staying up-to-date with the latest industry trends. Feel free to check out my resume or connect with me to learn more about my work.</p>
          </div>
        </div>
        <div className='mt-4 flex lg:justify-center gap-3'>
            <a href="../public/SayanBatabyal-CV.pdf" className='flex items-center md:p-2 md:px-2 md:text-base bg-white text-black  p-2.5 px-6 rounded-lg text-lg font-bold hover:bg-sky-500 transition:all ease-in duration-100 ' download={true}>Resume <LinkArrow className='w-6 ml-1'/></a>
            <a href='mailto:sayanbatabyal.mav@gmail.com' className='flex items-center md:text-base font-bold ml-4 border-b-0  border-sky-500 hover:border-b-4 transition:[border] ease-in duration-100'>Connect</a>
          </div>
        </Layout>
    </div>
    </>
  )
}

export default Home