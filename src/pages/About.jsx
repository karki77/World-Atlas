import React from 'react'
import countryFacts from'../api/countryData.json'

export default function About() {
  return (
    <section className='section-about container'>
      <h2 className='container-title'>Here are the Interesting Facts
      <br/>
       we're proud of
      </h2>

      <div className='gradient-cards'>
        {
        countryFacts.map((country) => {
            const {id, countryName, capital, population, interestingFact} = country;
          return(
          <div className='card' key={id}>
          <div className='container-card bg-blue-box'>
            <p className='card-title'>{countryName}</p>
             <p>
              <span className='card-discription'>{capital}</span> 
             </p>
             <p>
              <span className='card-discription'>{population}</span>
              </p>
             <p>
              <span className='card-discription'>{interestingFact}</span>
              </p>
          </div>
          </div>
          )
        })
      }
     </div>

    </section>
  )
}
