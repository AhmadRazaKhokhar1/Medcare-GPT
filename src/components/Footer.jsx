import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between  bg-purple-900 p-12 text-white w-full mt-5'>
      <div className=" p-12 flex">
        copyright&copy;2024 Ahmad Raza Khokhar
      </div>
      <div className='p-12'>
        <h2 className='font-extrabold text-center'>
            Connect with me
        </h2>
        <div>Facebook</div>
        <div>Github</div>
        <div>LinkedIn</div>
      </div>
    </div>
  )
}
