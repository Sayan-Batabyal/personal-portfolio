import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import{GithubIcon, LeetCode, LinkedIn } from './icons'
import {motion} from "framer-motion"
import Logo from './Logo'
import { useState } from 'react'

const CustomLink=({link,title,className})=>{
const path=useLocation()
  return(
    <Link to={`${link}`} className={`${className} relative group font-bold`}>{title}
    <span className={`h-[1px] inline-block 
    bg-white absolute left-0 -bottom-0.5 
    group-hover:w-full transition-[width] 
    ease duration-300 ${path.pathname==link ? `w-full`:`w-0`}`}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink=({link,title,className,toggle})=>{
  const path=useLocation()
  const navigate=useNavigate()
  
  const handleClick=()=>{
    toggle()
    path.pathname=link
    navigate(path.pathname)
  }
  return(
      <button href={path} onClick={handleClick} className={`${className} text-black my-2 relative group font-bold`}>{title}
      <span className={`h-[1px] inline-block 
      bg-black absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] 
      ease duration-300 ${path.pathname==link ? `w-full`:`w-0`}`}>&nbsp;</span>
      </button>
    )
  }

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleClick=()=>{
    setOpen(!open)
  }
  return (
    <header className='w-full lg:px-16 md:px-12 sm:px-8 px-32  py-8 font-medium text-white flex items-center justify-between relative '>
       <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-white block h-0.5 w-6  transition-all duration-300 ease-out  ${open?`rotate-45 translate-y-1`:'-translate-y-0.5'} `}></span>
        <span className={`${open?`opacity-0`:'opacity-100'} bg-white block h-0.5 w-6  transition-all duration-300 ease-out my-0.5`}></span>
        <span className={`bg-white block h-0.5 w-6  transition-all duration-300 ease-out translate-y-0.5  ${open?`-rotate-45 -translate-y-1`:'translate-y-0.5'}  `}></span>
       </button>
       <div className='w-full flex justify-between items-center lg:hidden'>
       <Logo/> 
       <nav>
           <CustomLink title="Home" link="/" className='mr-4'/>
           <CustomLink title="Skills" link="/skills" className='mx-4'/>
           <CustomLink title="Projects" link="/project" className='ml-4'/>
    
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
            
            <motion.a href="https://github.com/Sayan-Batabyal" target='_blank' 
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}
            className='w-6 mr-3 '
            
            ><GithubIcon className={'fill-white'}/></motion.a>
            <motion.a href="https://www.linkedin.com/in/sayan-batabyal-01b918202/" target='_blank' 
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}
            className='w-6 mx-3'><LinkedIn className={'fill-sky-500'}/></motion.a>

            <motion.a href="https://leetcode.com/Jaxer_Zr/" target='_blank' whileHover={{y:-4}}
            whileTap={{scale:0.9}}
            className='w-6 ml-3'><LeetCode className={'fill-orange-400'}/></motion.a>

        </nav>
       </div>
      {
        open&& <motion.div className=' bg-white/75 rounded-lg backdrop-blur-md py-32  min-w-[70vw] flex flex-col  justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        initial={{y:["-50%"],x:["-50%"], scale:0, opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.3}}
        >
        <Logo className='text-black'/> 
        <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink toggle={handleClick} title="Home" link="/" className=''/>
            <CustomMobileLink toggle={handleClick} title="Skills" link="/skills" className=''/>
            <CustomMobileLink toggle={handleClick} title="Projects" link="/project" className=''/>
     
         </nav>
         <nav className='flex items-center justify-center flex-wrap mt-2'>
             
             <motion.a href="https://github.com/Sayan-Batabyal" target='_blank' 
             whileHover={{y:-4}}
             whileTap={{scale:0.9}}
             className='w-6 mr-3 bg-black rounded-full '
             
             ><GithubIcon className={'fill-white'}/></motion.a>
             <motion.a href="https://www.linkedin.com/in/sayan-batabyal-01b918202/" target='_blank' 
             whileHover={{y:-4}}
             whileTap={{scale:0.9}}
             className='w-6 mx-3 bg-white rounded-full'><LinkedIn className={'fill-sky-500'}/></motion.a>
 
             <motion.a href="https://leetcode.com/Jaxer_Zr/" target='_blank' whileHover={{y:-4}}
             whileTap={{scale:0.9}}
             className='w-6 ml-3 bg-gray-600 border-gray-600 border-4 rounded-lg'><LeetCode className={'fill-orange-400'}/></motion.a>
 
         </nav>
        </motion.div>
      }
       </header>
  )
}

export default Navbar