import React, { useEffect, useState } from 'react'
import Country from './Country'

const Countries = () => {
  const [country,setCountry] = useState([]);
 const [isLoading,setislLoading] = useState(false)
  useEffect(()=>{
    
    const fetchCountries = async () =>{
     setislLoading(true)
     try {
         const res = await  fetch('https://restcountries.com/v3.1/all');
         const data = await res.json();
         if(!res.ok) throw new Error('something is wrong')
         console.log(data);
         setCountry(data.map(ctr=>{
             return {
                 name:ctr.name.official,
                 population:ctr.population,
                 region:ctr.region,
                 capital: ctr.capital,
                 flag:ctr.flags.svg,
                 id:ctr.area
             }
         }))
     } catch (error) {
         console.log(error)
     }
     setislLoading(false)
    }
    fetchCountries()
  },[])
  return (
    <section className='flex flex-row items-center justify-center flex-wrap  py-5  px-14 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:px-3 md:gap-8 lg:grid-cols-4 md:justify-center md:items-stretch'>

      <Country isLoading={isLoading} country={country}/>
    </section>
  )
}

export default Countries