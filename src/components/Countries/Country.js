
import React, { useEffect, useState } from 'react'
import classes from './Country.module.css'
const Country = () => {
 const [country,setCountry] = useState([]);
 const [isLoading,setislLoading] = useState(false)
 useEffect(()=>{
    
   const fetchCountries = async () =>{
    setislLoading(true)
    try {
        const res = await  fetch('https://restcountries.com/v3.1/name/united');
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
 console.log(country)
  return (
    <main className={classes.container}>
    {isLoading && <span className={classes.loader}></span>}
    {!isLoading && country.map(ctr=> {
        return <section className={classes.card} key={ctr.id} >
            <picture>
                <img src={ctr.flag} alt={ctr.name}/>
            </picture>
        </section>
    }) }
    
    </main>
  )
}

export default Country