import React from 'react'
import icon from '../../Images/moon-solid.svg'
const Header = () => {
  return (
    <header className='font-nunitoSans flex justify-between py-5 px-2 shadow-xl'>
       <h1 className='font-extrabold text-veryDarkBlueL lg:text-2xl text-base'>Where in the world?</h1>
       <div className='flex items-center'>
        <picture>
            <img src={icon} alt='toggle' className='w-4 h-4'/>
        </picture>
        <div className='font-semibold text-base'>Dark Mode</div>
       </div>
    </header>
  )
}

export default Header