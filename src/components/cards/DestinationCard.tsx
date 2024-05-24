import React from 'react'
import { DestinationProps } from './Card.types'
import Image from 'next/image'

const DestinationCard = ({ imageUrl, title, amount, duration, highlighted }: DestinationProps) => {
  return (
    <div className='flex relative flex-col justify-between  pb-[2.63rem] group'>
      <div className='  object-fill '>
        <Image
          src={imageUrl}
          alt='destination image'
          className='w-[314px] h-[20.43rem]  object-cover rounded-t-[1.5rem]'
          width={314}
          height={327}
        />
      </div>
      <div className='bg-white w-full mt-[1.69rem] px-[1.62rem]  group-hover:shadow-md pb-[2rem] group-hover:rounded-[1.5rem]'>
        <div className='flex justify-between text-lightGray text-[1.125rem] font-bold'>
          <p>{title}</p>
          <p>{amount}</p>
        </div>
        <div className='flex gap-4 items-center'>
          <div>
            <Image src='/images/send-icon.png' alt='send icon' width={18} height={18} />
          </div>
          <p className='text-lightGray font-bold'>{duration}</p>
        </div>
      </div>
      {highlighted && (
        <div className='absolute bottom-[5rem] right-[-4rem] -z-10 hidden md:block'>
          <Image src='/images/stylish-ring.png' alt='curly ring' width={100} height={100} />
        </div>
      )}
    </div>
  )
}

export default DestinationCard
