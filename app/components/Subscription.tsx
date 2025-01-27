import React from 'react'

const Subscription = () => {
  return (
    <div className="bg-slate-100 lg:px-12 md:px-6 px-4 py-6">
      <div className="bg-hue-light lg:p-12 p-6 rounded-lg">
          <h2 className='font-semibold lg:text-2xl text-xl'>Sign Up for Our Newsletter</h2>
          <p className='py-3'>Subscribe to receive our latest company updates</p>

          <form className="flex gap-4 lg:flex-row flex-col">
              <input className='=lg:w-[85%] w-full bg-transparent p-2 border-[1.5px] lg:text-base py-2 text-sm focus:outline-none border-[#8080803b] rounded' type="email" required placeholder='Subscribe to receive our latest company updates'/>
              <button className="bg-hue text-white px-6 rounded lg:w-auto w-[50%] lg:py-0 py-2">Subscribe</button>
          </form>
      </div>
    </div>
  )
}

export default Subscription