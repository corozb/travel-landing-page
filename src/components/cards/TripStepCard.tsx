import Image from 'next/image'
import { Base } from './Card.types'

const TripStepCard = ({ iconUrl, title, description }: Base) => {
  return (
    <div className='flex  gap-8 items-center'>
      <div>
        <Image src={iconUrl} alt='step icon' width={47} height={48} />
      </div>
      <div className='flex flex-col'>
        <p className='text-lightGray text-[1rem] font-[700]'>{title}</p>
        <p className='text-lightGray text-[1rem] font-[400]'>{description}</p>
      </div>
    </div>
  )
}

export default TripStepCard
