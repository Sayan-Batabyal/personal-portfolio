import React from 'react'
import AnimatedText from './AnimatedText'
import Layout from './Layout'
import AnimateNumber from './AnimateNumber'
import Techs from './Techs'
import Education from './Education'
import Transition from './Transition'

const Skills = () => {
  return (
    <>
    <Transition/>

    <div className='text-white flex w-full fex-col items-center justify-center'>
      <Layout className='pt-16'>
      <AnimatedText text="Passion Fuels Purpose !"/>
       <div className=' mt-10 col-span-2 flex gap-10  items-center justify-center'>
        <div className=''>
         <p>Rated</p>
        <span className=' text-7xl font-bold'><AnimateNumber value={1702}/></span>
        <p>on</p>
        <p>LeetCode</p>
        </div>
        <div>
         <p>Rated</p>
        <span className='text-7xl font-bold'><AnimateNumber value={3}/>*</span>
        <p>on</p>
        <p>CodeChef</p>
        </div>
        <div>
         <p>Solved</p>
        <span className='text-7xl font-bold'><AnimateNumber value={1501}/>+</span>
        <p>DSA</p>
        <p>Problems</p>
        </div>
       </div>
       <Techs/>
      <Education/>
      </Layout>
    </div>
    </>

  )
}

export default Skills