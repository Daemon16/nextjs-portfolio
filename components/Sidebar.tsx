import Image from 'next/image'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import profilePic from '../public/me.png'
import { useTheme } from 'next-themes'

function Sidebar() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Image
        src={profilePic}
        alt="user"
        className="mx-auto h-32 w-32 rounded-full"
        layout="intrinsic"
        height="128px"
        width="128px"
      />
      <h3 className="my-4 font-actor text-3xl font-medium tracking-wider">
        <span className="text-green">Diogo </span>
        Machado
      </h3>
      <p className="my-3 rounded-full bg-gray-200 px-2 py-1 dark:bg-dark-100 dark:text-white">
        Web Developer
      </p>
      <a
        className="my-3 flex items-center justify-center rounded-full bg-gray-200 px-2 py-1 dark:bg-dark-200"
        href="/assets/resume.pdf"
        download="resume.pdf"
        aria-label="download"
      >
        Download Resume
      </a>
      {/* social icons */}
      <div className="my-5 mx-auto flex w-9/12 justify-around text-green md:w-full">
        <a
          href="https://github.com/Daemon16"
          aria-label="github"
          target="_blank"
        >
          <AiFillGithub className="h-8 w-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/diogo-machado-46054b12a/"
          aria-label="linkedin"
          target="_blank"
        >
          <AiFillLinkedin className="h-8 w-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="my-5 bg-gray-200 py-4 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Porto, Portugal</span>
        </div>
        <p className="my-2">diogomachado16@hotmail.com</p>
      </div>
      {/* Email Button */}
      <button
        className="my-2 w-8/12 rounded-full bg-gradient-to-r from-green to-blue-400 py-2 px-5 text-white focus:outline-none"
        onClick={() => window.open('mailto:diogomachado16@hotmail.com')}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="my-2 w-8/12 rounded-full bg-gradient-to-r from-green to-blue-400 py-2 px-5 text-white"
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default Sidebar
