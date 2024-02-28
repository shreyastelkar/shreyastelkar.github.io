import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Creative = () => {
  return (
    <section>
      <div>
        <h1 className = 'text-center py-12 text-6xl underline text-white'> Personal </h1> 
      </div>

      <div className='flex ml-8'>
          <div className='flex-1 mb-4'>
            <h2 className='text-3xl text-white mb-2'>Research/Blog</h2>
            <Link href='/' passHref>
              <Image
                className='hover:opacity-20'
                src="/poster.png"
                width={500}
                height={500}
                />
            </Link>
            <p className='text-white mt-2'> View my updates here </p>
          </div>

        <div className=' flex-1 ml-56'>
          <h2 className='text-3xl text-white mb-2'>Creative</h2>
          <a href='https://www.youtube.com/channel/UCtJYknU_IdiXkffu1Ii2K8A'>
          <Image
            className='hover:opacity-20'
            src="/band.png"
            width={400}
            height={400}
            />
          </a>
          <p className='text-white mt-2'>I play guitar in my free time, check it out here. </p>
        </div>
      </div>
    </section>
  )
}

export default Creative