import React from 'react'
import { FaEye, FaRegFileCode  } from "react-icons/fa";
import Link from 'next/link';



const ProjectsCard = ({ imgURL, title, description, gitUrl, previewUrl }) => {
  return (
    <div className='my-3'>
      <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ background: `url(${imgURL})`, backgroundSize: 'cover' }}>
        
        <div className='overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link title='View Source Code' href={gitUrl} className='h-12 w-12 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link'>
            <FaRegFileCode className='h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white' />
          </Link>
          <Link title='View Live Site' href={previewUrl} className='h-12 w-12 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link'>
            <FaEye className='h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#adb7be] cursor-pointer group-hover/link:text-white' />
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h3 className='text-lg md:text-xl font-semibold mb-2 text-white truncate'>{title}</h3>
        <p className='text-sm md:text-lg text-[#adb7be]'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard