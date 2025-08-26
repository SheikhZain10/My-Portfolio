import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className=" w-full px-[12%] py-20 scroll-mt-0">
         <h4 className="text-center mb-2 text-lg font-outfit">What I Offer</h4>
      <h2 className="text-center text-5xl font-outfit">My Services</h2>
      <p className=' max-w-6xl mx-auto mt-5 mb-12 text-center  font-outfit'>
         I build robust, scalable web applications and APIs using .NET Core, C#, and ASP.NET MVC/Razor. I integrate payment gateways and accounting systems, optimize databases and reports, and deliver secure, high-performance SaaS products. Laravel/Blade and MySQL are also part of my toolkit.
      </p>
      <div className='grid lg:grid-cols-3 gap-6 my-6'>
  {serviceData.map(({ icon1, icon2, icon3, title, description }, index) => (
    <div
      key={index}
      className='border border-gray-400 rounded-lg px-6 py-6 cursor-pointer hover:bg-slate-100 hover:-translate-y-1 duration-500 hover:shadow-xl/30 dark:hover:bg-[#0a0a0a]'
    >
      <div className='flex items-center justify-center gap-3 mt-4'>
        <Image width={40} height={40} unoptimized src={icon1} alt={`${title} icon 1`} />
        <Image width={40} height={40} unoptimized src={icon2} alt={`${title} icon 2`} />
        <Image className='rounded-2xl' width={40} height={40} unoptimized src={icon3} alt={`${title} icon 3`} />
      </div>
      <h3 className='text-lg font-semibold my-2 mt-6 text-left'>{title}</h3>
      <p className='text-sm font-light leading-5 text-justify'>{description}</p>
    </div>
  ))}
</div>



    </div>
  )
}

export default Services