import Image from 'next/image'

interface IProps {
  iconUrl: string
  title: string
  description: string
  highlighted: boolean
}

const CategoryCard = ({ highlighted, title, description, iconUrl }: IProps) => {
  return (
    <div
      className={`flex relative flex-col gap-4 items-center p-[2.5rem] ${
        highlighted ? 'bg-white shadow-md rounded-[2.5rem]' : ''
      }`}
    >
      <div>
        <img src={iconUrl} alt='category card icon' className='h-[80px]' />
      </div>
      <p className='text-subtitle text-[1.2rem] font-[600]'>{title}</p>
      <p className='text-lightGray text-[1rem] font-bold'>{description}</p>
      {highlighted && (
        <div className='absolute -bottom-8 -left-10 -z-10'>
          <Image src='/images/rectangle-shape.png' alt='rectangle shape' width={100} height={100} />
        </div>
      )}
    </div>
  )
}

export default CategoryCard
