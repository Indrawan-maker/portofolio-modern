import React from 'react'

const HeroBanner = () => {
  return (
    <section className='relative h-[460px] w-full rounded-b-4xl'>
      <img src="/images/bg-1.jpg" className='h-full w-full rounded-4xl object-cover shadow-md' />
      <div className='absolute bg-(--bg-primary-cray) h-32 w-32 rounded-full -bottom-18 -translate-x-1/2 transform left-1/2'></div>
      <div className='absolute -bottom-16 left-1/2 flex flex-col items-center justify-center gap-2 rounded-full h-28 w-28 -translate-x-1/2 transform cursor-pointer bg-(--bg-secondary-cray) shadow-xl transition-transform duration-300 ease-in-out hover:scale-105'>
        test
        <i className="fa fa-arrow-up mb-2 rotate-45 text-xl text-white"></i>
        test
      </div>
    </section>
  )
}

export default HeroBanner