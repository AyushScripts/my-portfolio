import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "text-black dark:text-white border-2 md:border-4 rounded-full border-purple-600 dark:border-purple-500" : "text-gray-700 dark:text-[#adb7be] border-2 md:border-4 border-slate-400 hover:border-slate-500 dark:hover:border-white"
  return (
    <div>
        <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-sm md:text-xl cursor-pointer`}
                onClick={()=>onClick(name)}
        >{name}</button>
    </div>
  )
}

export default ProjectTag