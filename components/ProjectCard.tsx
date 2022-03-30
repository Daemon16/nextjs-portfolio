import { motion } from 'framer-motion'
import Image from 'next/image'
import { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'
import { fadeInUp, stagger } from '../animations'
import { IProject } from '../types'

const ProjectCard: FunctionComponent<{
  project: IProject
  showDetail: null | number
  setshowDetail: (id: number | null) => void
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetail,
  setshowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setshowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid h-auto w-full gap-x-12 rounded-lg bg-gray-100 p-2 text-black dark:bg-dark-100 dark:text-white md:grid-cols-2 md:p-10">
          <motion.div variants={stagger} animate="animate" initial="initial">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-400"
            >
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>

            <motion.div
              className="my-4 flex justify-center space-x-3"
              variants={fadeInUp}
            >
              <a
                href={github_url}
                className="text-kg flex items-center  space-x-3 bg-gray-200 px-4 py-2 dark:bg-dark-200"
                target="_blank"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="text-kg flex items-center  space-x-3 bg-gray-200 px-4 py-2 dark:bg-dark-200"
                target="_blank"
              >
                <AiFillProject /> <span>Test it</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} animate="animate" initial="initial">
            <motion.h2
              className="mb-3 text-xl font-medium md:text-2xl"
              variants={fadeInUp}
            >
              {name}
            </motion.h2>
            <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>
              {description}
            </motion.h3>

            <motion.div
              className="mt-5 flex flex-wrap space-x-2 text-sm tracking-wider"
              variants={fadeInUp}
            >
              {key_techs.map((tech) => (
                <span
                  className="my-1 rounded-sm bg-gray-200 px-2 py-1 dark:bg-dark-200"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setshowDetail(null)}
            className="absolute top-3 right-3 rounded-full bg-gray-200 p-1 focus:outline-none dark:bg-dark-200"
          >
            <RiCloseFill />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
