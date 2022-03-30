import { motion } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react'
import { fadeInUp, routeFadeIn, stagger } from '../animations'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects } from '../data'
import { Category } from '../types'
function Projects() {
  const [activeProjects, setActiveProjects] = useState(projects)
  const [active, setActive] = useState('all')
  const [showDetail, setshowDetail] = useState<number | null>(null)

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setActiveProjects(projects)
      setActive('all')
      return
    }
    const newArray = projects.filter((project) =>
      project.category.includes(category)
    )
    setActiveProjects(newArray)
    setActive(category)
  }
  return (
    <motion.div
      className="overflow-y-scroll px-5 py-2"
      style={{ height: '65vh' }}
      variants={routeFadeIn}
      initial="inital"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Diogo Machado | Web Developer | Portfolio</title>
      </Head>
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative my-3 grid grid-cols-12 gap-4"
      >
        {activeProjects.map((project) => (
          <motion.div
            variants={fadeInUp}
            className="col-span-12 rounded-lg bg-gray-200 p-2 dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setshowDetail={setshowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
