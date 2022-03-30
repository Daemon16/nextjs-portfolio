import { FunctionComponent } from 'react'
import { IServive } from '../types'

const ServiceCard: FunctionComponent<{ service: IServive }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    }
  }

  return (
    <div className="flex items-center space-x-4 rounded-lg bg-gray-200 p-2 dark:bg-dark-700 lg:col-span-1">
      <Icon className="h-12 w-12 text-green" />
      <div>
        <h5 className="font-bold">{title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default ServiceCard
