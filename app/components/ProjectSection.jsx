"use client"
import React, {useState} from 'react'
import ProjectsCard from './ProjectsCard'
import { ProjectsData } from './data/constants'
import ProjectTag from './ProjectTag'
import { Tilt } from 'react-tilt'

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = ProjectsData.filter((project) => 
    project.tag.includes(tag)
  )
  return (
    <>
      <h2 className='text-3xl text-center pb-10 font-serif font-medium mt-12 lg:text-5xl lg:mt-20 text-[#333333] dark:text-white'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag onClick={handleTagChange} name = "All" isSelected={tag==="All"} />
        <ProjectTag onClick={handleTagChange} name = "Web" isSelected={tag==="Web"} />
        <ProjectTag onClick={handleTagChange} name = "No-code" isSelected={tag==="No-code"} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>{filteredProjects.map((project) => <ProjectsCard key={project.id} title={project.title} description={project.description} imgURL={project.image} gitUrl= {project.gitUrl} previewUrl={project.previewUrl} />)}</div>
    </>
  )
}

export default ProjectSection;