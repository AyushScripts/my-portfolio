import React from 'react'
import SocialLinks from './SocialLinks'
import Link from 'next/link'

const ContactMe = () => {
  return (
    <div className='flex flex-col gap-5 py-5 mt-20 text-center'>
        <h1 className='text-[#333333] dark:text-white text-3xl lg:text-5xl font-serif'>Let's connect!</h1>
        <p className='text-[#817d7d] dark:text-[#adb7be] text-lg md:text-xl'>I am open to exciting opportunities. So if you have one, I am just a message away!</p>
        <a className='text-base md:text-lg mx-auto text-white dark:text-[black] font-semibold bg-purple-400/90 hover:bg-purple-400 transition-all ease-in px-4 py-3 mt-4 rounded-lg' href="mailto:ayushtheking117@gmail.com">Contact Me!</a>
    </div>
  )
}

export default ContactMe