import React, { useState } from 'react'
const Input = () => {
  const [showFilter,setShowFilter] = useState(false);
  const [filter,setFilter] = useState('');
  const regions = ['Africa','Asia','America','Oceania','Europe'];
  const toggleFilter = () =>{
    setShowFilter((prev)=> !prev)
    
  }
  const changeFilter = (e) => {
    setFilter(e.target.textContent);
   toggleFilter()
    console.log(showFilter);
  }
  return (
    <form className='px-8 relative  font-nunitoSans flex flex-col md:flex-row md:justify-between space-y-5 md:space-y-0 items-start'>
    <div className='relative text-darkGray text-base self-stretch' >

  <input type='text' placeholder='Search for a country' className='w-full shadow-lg py-3 pl-14 rounded-md focus:pl-10 focus:outline-none' />
  <div className='absolute left-5 top-3'>
  <i className="fa-solid fa-magnifying-glass"></i>
  </div>
    </div>
    <div className='relative font-semibold text-darkBlue '  onClick={toggleFilter}>

    <div className='shadow-lg rounded-md py-4 px-4'>
     <input type='text' value={filter ? filter : 'Filter by Region'} readOnly  className='focus:outline-none focus:outline-white' />
     <i className="fa-solid fa-angle-down"></i>
     
    </div>
    <div className={`absolute top-16 left-0 pl-4 shadow-lg rounded-lg w-full bg-white flex space-y-1 py-3 transition-all duration-300  flex-col ${!showFilter ? 'h-0 overflow-hidden py-0' : '' }`}>
      {regions.map(reg=> <p key={reg} onClick={changeFilter}>{reg}</p>)}

     </div>
    </div>
    </form>
  )
}

export default Input