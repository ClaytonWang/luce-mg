import React, { useState, useEffect } from 'react';
import { User,CountryUsers } from '../../utils/types';
import {groupUsersByCountry,getData} from '../../utils';
import UserList from '../UserList';
import './index.css';

const  CountryList = ({genderFilter}:any)=>{
  const [countries, setCountries] = useState<CountryUsers>({});
  const [visibleCountry, setVisibleCountry] = useState<string | null>(null);

  const handleData = (data: User[]) => {
    const groupedUsers = groupUsersByCountry(data);
    console.log(groupedUsers);
    setCountries(groupedUsers);
  };

  useEffect(() => {
     getData(genderFilter).then(handleData);
  }, [genderFilter]);

  const handleCountryClick = (countryName: string) => {
    if(countryName === visibleCountry){
      setVisibleCountry(null);
    }else{
      setVisibleCountry(countryName);
    }
    
  };

  /**
   * 
   * @param sorted by the date registered most recent 
   * @returns 
   */
  const filtrUsers = (country:string) => {
    return countries[country].sort((a, b) => new Date(b.registered.date).getTime() - new Date(a.registered.date).getTime())
  }

  return (
    <div className="countries">
      {/** sorted by the number of Users in each country */}
        {Object.keys(countries).sort((a, b) => countries[b].length - countries[a].length).map((country, index) => (
          <div key={index} className="country" onClick={() => handleCountryClick(country)}>
            <span className='name'>Country:</span>
            <span>{country}</span>
            <span >Users Num: </span>
            <span>{countries[country].length}</span>
            {visibleCountry === country && (
              <div className="users">
                <UserList users={filtrUsers(country)} />
              </div>
            )}
          </div>
        ))}
      </div>
  );
}

export default CountryList;