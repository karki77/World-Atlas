import React, { useState, useTransition } from 'react'
import { useEffect } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../Components/UI/Loader';
import CountryCard from '../Components/Layout/CountryCard.jsx';
import SearchFilter from '../Components/UI/SearchFilter.jsx';
 
  export  default function Country () {
    const [isPending, startTransition] = useTransition();
    const [countries,setCountries] = useState([]);

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");
  
    useEffect(() => {
      startTransition(async() => {
          const res = await getCountryData();
          setCountries(res.data);
          
      })
     
    }, []);
  
   if (isPending) return <Loader/>;
   //console.log(search,filter);

   const searchCountry = (Country) => {
    if(search){
      return Country.name.common.toLowerCase().includes(search.toLowerCase());
    }
     return Country; 
   }

   const filterRegion = (Country) => {
    if(filter === "all") return Country;
    return Country.region ===filter;
   }

  //here is the main logic
  const filterCountries = countries.filter((Country) => searchCountry(Country) && filterRegion(Country));
   

   return <section className='country-section'>
     <SearchFilter
     search = {search}
     setSearch = {setSearch}
     filter = {filter}
     setFilter = {setFilter}
     countries = {countries}
     setCountries = {setCountries}
     />
     <ul className='grid grid-four-cols'>{
        filterCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index}/>;
        })
      }
       
     </ul>
   </section>;
  
}


