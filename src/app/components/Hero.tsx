'use client'
import Image from 'next/image'
import React from 'react'
import { bgimg, image1 } from '../../../public'
import { delay, motion } from "framer-motion"

const Hero = () => {

  const variants ={
      hidden:{x:0, y:70, opacity:0.25},
      visibile:{x:0, y:-10, opacity:1, transition:{delay:0.05}}
  }
  return (
    <div className='heroSection'>
        <div className='heroContainer'>
            {/* Outer image */}
            <div className='object-cover '>
              <Image 
                  src={bgimg} 
                  height={"100"}
                  width={"1400"}    
                  alt='banner'
                      />
            </div>
            <div className='heroBanner'>
                <motion.div 
                  initial='hidden'
                  animate='visible'
                  variants={variants}
                >
                  <Image
                      src={image1}
                      height={100}
                      width={700}
                      alt='airpods'
                  />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero