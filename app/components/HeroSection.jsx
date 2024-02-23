"use client"
import Image from 'next/image'
import React from 'react'
import SocialLinks from './SocialLinks';

import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className="text-[#333333] dark:text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                   <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400'>Hello, I'm {" "}</span> 
                   <br></br>
                   <TypeAnimation 
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Ayush',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Web Developer',
                            1500,
                            'a Frontend Developer',
                            1500
                            
                            
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                      />
                </h1>
                <p className='text-[#817d7d] dark:text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
                    I am a full stack (MERN) developer with a passion for front-end and no-code development.
                </p>
                <SocialLinks/>
            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <Image
                    src="/images/heroImg1.png"
                    alt='Hero Image'
                    width={300}
                    height={300}
                />
            </div>
            
        </div>
        
    </section>
  )
}

export default HeroSection