import { FunctionComponent } from 'react'
import { Category } from '../types'
const NavItem: FunctionComponent<{
  value: Category | 'all'
  handleFilterCategory: Function
  active: string
}> = ({ value, handleFilterCategory, active }) => {
  let classname = 'cursor-pointer capitalize hover:text-green'
  if (active === value) classname += ' text-green'

  return (
    <li onClick={() => handleFilterCategory(value)} className={classname}>
      {value}
    </li>
  )
}

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function
  active: string
}> = (props) => {
  return (
    <div className="flex list-none space-x-3 overflow-x-auto px-3 py-2">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="nextjs" {...props} />
      <NavItem value="django" {...props} />
    </div>
  )
}

export default ProjectsNavbar
