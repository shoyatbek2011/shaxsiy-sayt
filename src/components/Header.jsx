import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className=' border-2 border-black rounded-2xl p-5 bg-cyan-600 '>
      <div className='w-full max-w-[1200px] mx-auto flex justify-between '>
        <h1 className='text-4xl ml-0 font-semibold'>1brohimov</h1>

        <button className='border-2 p-3 border-white rounded-2xl bg-red-600 text-white shadow-xl'>Aloqaga chiqish</button>
        
      </div>
      
    </div>
  )
}

export default Header