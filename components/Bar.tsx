import { FunctionComponent } from 'react'
import { ISkill } from '../types'
import { motion } from 'framer-motion'

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name, level },
}) => {
  const bar_width = `${level}%`
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.6,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  }
  return (
    <div className="my-2 rounded-full bg-gray-300 text-white dark:bg-dark-300">
      <motion.div
        className="flex items-center rounded-full bg-gradient-to-r from-green to-blue px-4 py-1 dark:from-dark-700 dark:to-dark-700"
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar
