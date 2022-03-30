import { GetServerSidePropsContext, GetStaticPathsContext } from 'next'
import { services } from '../data'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
import { fadeInUp, stagger, routeFadeIn } from '../animations'
import Head from 'next/head'

const index = () => {
  return (
    <motion.div
      className="flex flex-grow flex-col px-6 pt-1"
      variants={routeFadeIn}
      initial="inital"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Diogo Machado | Web Developer | Portfolio</title>
      </Head>
      <h5 className="my-3 font-medium">
        Diogo is an enthusiastic developer with a passion for working on
        full-stack .NET and React applications. He's addicted to writing
        scalable and clean code for demanding software solutions. Naturally
        curious, he continuously learns new technologies to improve his
        efficiency and code resiliency. Being an open-minded, analytical
        tinkerer helps Diogo quickly pick up business and client requirements
        and develop an appropriate solution.
      </h5>
      <div
        className="mt-5 flex-grow bg-gray-400 p-4 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 rounded-lg bg-gray-200 p-2 dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

/* export const getStaticProps = async (context: GetStaticPathsContext) => {

  const res = await fetch("http://localhost:300/api/services")
  const data = await res.json() 

  return {
    props: {
      services: data.services
    }
  }
} */
