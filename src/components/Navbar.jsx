import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import{GithubIcon, LeetCode, LinkedIn } from './icons'
import {motion} from "framer-motion"
import Logo from './Logo'

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

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium text-white flex items-center justify-between'>
       <Logo/> 
       
       <nav>
           <CustomLink title="Home" link="/" className='mr-4'/>
           <CustomLink title="Skills" link="/skills" className='mx-4'/>
           <CustomLink title="Project" link="/project" className='ml-4'/>
    
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
       </header>
  )
}

export default Navbar