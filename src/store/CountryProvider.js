
import React, {useCallback, useEffect, useState} from 'react'
import Country from './country-context'

const CountryProvider = (props) => {
  const [country,setCountry] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [filterdCountry,setFilterdCountry] = useState('');
  const fetchCountry =useCallback( async (url ='https://restcountries.com/v3.1/all') => {
    setIsLoading(true)
    try {
      const res = await  fetch(url);
      const data = await res.json();
      if(!res.ok) throw new Error('something is wrong')
   
      setCountry(data.map(ctr=>{
          return {
               ...ctr ,
              name:ctr.name.official,
              population:ctr.population,
              region:ctr.region,
              capital: ctr.capital,
              flag:ctr.flags.svg,
              id:ctr.area
          }
      }))
  } catch (error) {
    console.log(error);
  }
  setIsLoading(false)
},[])
  useEffect(()=>{
    if(filterdCountry !== ''){
      fetchCountry(`https://restcountries.com/v3.1/region/${filterdCountry.toLocaleLowerCase()}`)
      return;
    }
    fetchCountry()
  },[fetchCountry,filterdCountry])
  const filter =(val) => {
   setFilterdCountry(val)
  }
  return (
    <Country.Provider value={{data:country,current:[],isLoading, filter}}>
        {props.children}
    </Country.Provider>
  )
}

export default CountryProvider