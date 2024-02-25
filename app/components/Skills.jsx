import React from 'react';
import { skills } from './data/constants';
import Image from 'next/image';


const Skills = () => {
  return (
    <div id='container' className='flex flex-col justify-center items-center z-1'>
      <div id='wrapper' className='relative flex flex-col items-center w-full max-w-[1100px] gap-12'>
        <h2 id='title' className='text-3xl font-serif font-medium mt-12 lg:text-5xl lg:mt-20 text-[#333333] dark:text-white'>
          Few things I know...
        </h2>
        <div id='skillsContainer' className='w-full flex flex-wrap mt-10 px-5 md:px-0 gap-12 justify-center'>
          {skills.map((skill, index) => (
            
            
            <div id="skills" key={`skill-${index}`} className='w-full max-w-[500px]  bg-[#111928]/80 border border-[#ffffff]/10 rounded-2xl py-5 px-9'>
              <p id='skillTitle' className='text-2xl font-medium mt-3 mb-14 lg:mb-20 text-center dark:text-[#f3bff3] text-white'>
                {skill.title}
              </p>
              <div id='skillList' className='flex justify-center flex-wrap gap-3 mb-5'>
                {skill.skills.map((item, index) => (
                  <div key={`skill-item-${index}`} className='text-base font-normal dark:text-white text-[#f3bff3] border border-slate-500 dark:bg-[#eea4a42c] rounded-xl px-4 py-3 flex items-center justify-center gap-2'>
                    <Image src={item.image} width={24} height={24} alt='Skill Icon' />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;