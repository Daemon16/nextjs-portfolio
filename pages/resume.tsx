import Bar from '../components/Bar'
import { skills, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeFadeIn } from '../animations'
import Head from 'next/head'
const Resume = () => {
  return (
    <motion.div
      className="'py-2 px-6"
      variants={routeFadeIn}
      initial="inital"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Diogo Machado | Web Developer | Portfolio</title>
      </Head>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="grid gap-6 md:grid-cols-2"
      >
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              FLAGProfessional Web & Mobile Developer
            </h5>
            <p className="font-semibold">FLAG</p>
            <p className="my-3">Avid Self-learner</p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Frontend Developer</h5>
            <p className="font-semibold">Hydradev (2020 - currently)</p>
            <p className="my-3">
              Working React based SPA's, Typescript and a little Node.JS
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">Fullstack Developer</h5>
            <p className="font-semibold">SoftReady (2016-2020)</p>
            <p className="my-3">
              Worked on multiple applications for airlines using C#, Web-forms,
              jQuery and KendoUI
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="grid gap-6 md:grid-cols-2"
      >
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <div className="my-2">
            {skills.map((skill) => (
              <Bar data={skill} key={skill.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Resume
