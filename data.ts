import { RiComputerLine } from 'react-icons/ri'
import { IServive, ISkill, IProject } from './types'
import { BsCircleFill } from 'react-icons/bs'

export const services: IServive[] = [
  {
    title: 'Frontend Dev',
    about: 'Building SPA using <b> HTML</b>, <b> CSS</b> and <b> React.JS</b>',
    Icon: RiComputerLine,
  },
  {
    title: 'Fullstack Dev',
    about: 'Building SPA using <b> Next.JS</b> and <b> Node.JS</b>',
    Icon: RiComputerLine,
  },
]

export const skills: ISkill[] = [
  {
    name: 'Javascript',
    level: '70',
    Icon: BsCircleFill,
  },
  {
    name: 'CSS',
    level: '70',
    Icon: BsCircleFill,
  },
  {
    name: 'React.JS',
    level: '70',
    Icon: BsCircleFill,
  },
  {
    name: 'React Native',
    level: '50',
    Icon: BsCircleFill,
  },
  {
    name: 'Node.JS',
    level: '50',
    Icon: BsCircleFill,
  },
  {
    name: 'Next.JS',
    level: '50',
    Icon: BsCircleFill,
  },
]

export const tools: ISkill[] = [
  {
    name: 'Figma',
    level: '70',
    Icon: BsCircleFill,
  },
  {
    name: 'VS Code',
    level: '90',
    Icon: BsCircleFill,
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Medium Blog with Next.JS',
    description: 'A copy of the Medium blog using Next.JS',
    image_path: '/images/medium.png',
    deployed_url: 'https://sanity-medium-test-94wqrmsp9-daemon16.vercel.app/',
    github_url: 'https://github.com/Daemon16/sanity-medium-test',
    category: ['react', 'nextjs'],
    key_techs: ['React', 'Next.JS', 'TailwindCSS', 'Typescript'],
  },
  {
    id: 2,
    name: 'Web chat with Next.JS',
    description: 'A web chat using Next.JS and ChatEngine',
    image_path: '/images/chat.png',
    deployed_url: 'https://github.com/Daemon16/nextjs-chat',
    github_url: 'https://github.com/Daemon16/sanity-medium-test',
    category: ['react', 'nextjs'],
    key_techs: ['React', 'Next.JS', 'TailwindCSS'],
  },
  {
    id: 3,
    name: 'React todo list',
    description: 'A basic todo list using React.JS and TailwindCSS',
    image_path: '/images/todo.png',
    deployed_url: 'https://github.com/Daemon16/todo-list',
    github_url: 'https://todo-list-seven-rho.vercel.app/',
    category: ['react', 'nextjs'],
    key_techs: ['React', 'TailwindCSS'],
  },
]
