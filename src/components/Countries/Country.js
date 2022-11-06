import React, { useContext } from 'react'
import Countries from '../../store/country-context'
import theme from '../../toggle/Toggle';
const Country = ({country,isLoading}) => {
  const cotr = useContext(Countries);
  let current = 'light';
  if(cotr.theme){
    current='dark'
  }

let content = country.map(ctr => {
  return <section className={`${theme.general.card.main} ${theme[current].card.main}`} key={ctr.capital}>
 
      <img src={ctr.flag} alt={ctr.name} className='w-auto h-52 self-stretch' />
  <div className={`${theme.general.card.text} ${theme[current].card.text}`}>
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


 
  return (
    <>
    {content}
   
    
    </>
  )
}

export default Country