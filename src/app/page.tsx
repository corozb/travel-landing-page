import Navbar from '@/components/common/Navbar'
import BookNextTripSection from '@/components/sections/BookNextTripSection'
import CategorySection from '@/components/sections/CategorySection'
import HeroSection from '@/components/sections/HeroSection'
import LogoGroupSection from '@/components/sections/LogoGroupSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import TopSellingSection from '@/components/sections/TopSellingSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='relative poppins  md:px-[9rem]'>
      <Navbar />
      <div className='px-4 flex flex-col gap-[7.69rem]'>
        <HeroSection />
        <div className='absolute top-0 right-0 -z-10'>
          <Image src='/images/blob-shape.png' alt='blob background shape' width={704} height={704} />
        </div>
        <div className='absolute top-0 left-0 -z-10'>
          <Image src='/images/top-left-gradient.png' alt='blob background shape' width={209} height={209} />
        </div>
        <div className='relative'>
          <CategorySection />
          <div className='absolute top-0 right-0'>
            <Image src='/images/plus-group.png' alt='blob background shape' width={153} height={160} />
          </div>
        </div>
        ;
        <TopSellingSection />
        <BookNextTripSection />
        <TestimonialSection />
        <LogoGroupSection /> NewsLetterSection FooterSection
      </div>
    </main>
  )
}
