import React from 'react'

interface FooterProps {
  section: string
  list: string[]
}

const FooterList = ({ section, list }: FooterProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-lightBlack font-[700] text-[1.3125rem]'>{section}</p>
      <div className='flex flex-col gap-2'>
        {list.map((item) => (
          <p key={item} className='text-lightGray text-[1.125rem] font-[500]'>
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default FooterList
