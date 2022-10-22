
import React from 'react'
import classes from './Country.module.css'
const Country = ({country,isLoading}) => {
let content = <section className='min-h-screen flex justify-center align-center'>
  <span className={classes.loader}></span>
</section>
 if(!isLoading && country.length > 0){
 content = country.map(ctr => {
    return <section className='flex flex-col shadow-lg rounded-lg overflow-hidden bg-white' key={ctr.capital}>
   
        <img src={ctr.flag} alt={ctr.name} className='w-auto h-52 self-stretch' />
    <div className='text-veryDarkBlueL flex flex-col p-5 '>
        <h2 className='font-extrabold mb-4 text-lg'>{ctr.name}</h2>
        <p className='font-semibold'>Population: <span className='font-light'>
        {ctr.population}</span></p>
        <p className='font-semibold'>Region: <span className='font-light'>
         {ctr.region}</span></p>
        <p className='font-semibold'>Capital: <span className='font-light'>
         {ctr.capital}</span></p>
    </div>
</section>
})
 }
  return (
    <>
    {content}
    
    </>
  )
}

export default Country