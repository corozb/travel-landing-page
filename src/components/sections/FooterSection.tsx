import Image from 'next/image'
import React from 'react'
import FooterList from '../cards/FooterList'

function FooterSection() {
  const footerList = [
    {
      id: 1,
      section: 'Company',
      items: ['About', 'Careers', 'Mobile'],
    },
    {
      id: 2,
      section: 'Contact',
      items: ['Help/FAQ', 'Press', 'Affilates'],
    },
    {
      id: 3,
      section: 'More',
      items: ['Airlinefees', 'Airline', 'Low fare tips'],
    },
  ]
  return (
    <section>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div>
          <p>
            <Image src='/images/logo-bottom.png' alt='footer logo' width={149} height={34} />
          </p>
          <p className='text-lightGray mt-[1.19rem]'>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className='flex gap-8 flex-grow justify-between'>
          {footerList.map((item) => (
            <FooterList key={item.id} section={item.section} list={item.items} />
          ))}
        </div>

        <div className='flex flex-col gap-4 items-center'>
          <div className='flex items-center gap-4'>
            <Image src='/images/facebook-icon.png' alt='social icon' width={61} height={61} />
            <Image src='/images/instagram-icon.png' alt='social icon' width={61} height={61} />
            <Image src='/images/x-icon.png' alt='social icon' width={61} height={61} />
          </div>

          <p className='text-lightGray font-[500] text-[1.25rem]'>Discover our app</p>

          <div className='flex flex-col md:flex-row gap-8'>
            <div className='bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]'>
              <div className='flex gap-4 items-center'>
                <div>
                  <Image src='/images/google-play-icon.png' alt='google play icon' width={20} height={20} />
                </div>
                <div>
                  <p className='uppercase font-[700] text-white text-[0.7rem]'>get it on</p>
                  <p className='uppercase font text-white text-[0.7rem]'>Google play</p>
                </div>
              </div>
              <div></div>
            </div>
            <div className='bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]'>
              <div className='flex gap-4 items-center'>
                <div>
                  <Image src='/images/app-icon.png' alt='google play icon' width={14} height={16} />
                </div>
                <div>
                  <p className='uppercase font-[700] text-white text-[0.7rem]'>Available on the</p>
                  <p className='uppercase font text-white text-[0.7rem]'>Apple store</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <p className='my-[5.25rem] text-lightGray text-[0.875rem] font-[600] flex justify-center'>
        All rights reserved@jadoo.co
      </p>
    </section>
  )
}

export default FooterSection
