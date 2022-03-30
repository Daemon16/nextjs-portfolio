import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="lg:px-30 my-14 grid grid-cols-12 gap-6 px-5 sm:px-20 md:px-32">
        <div className="col-span-12 rounded-2xl bg-white p-4 text-center shadow-custom-ligh dark:bg-dark-600 dark:shadow-custom-dark lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl bg-white shadow-custom-ligh dark:bg-dark-600 dark:shadow-custom-dark lg:col-span-9">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
