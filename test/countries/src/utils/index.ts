import { User,CountryUsers } from "./types";
import { fetchData } from "./api";

const  API  ='https://randomuser.me/api/';

/**
 * 
 * @param users array of user objects
 * @returns 
 */
export const groupUsersByCountry = (users: User[]) => {
  const grouped: CountryUsers = {};

  users.forEach(user => {
    const country = user.location.country;
    if (!grouped[country]) {
      grouped[country] = [];
    }
    grouped[country].push(user);
  });
  return grouped;
};

/**
 * 
 * @param total total number of users to fetch
 * @returns 
 */
export const getData = async (genderFilter:string,total = 100) => {
  try {
    const response = await fetchData(API,total);
    console.log(genderFilter);

    if(genderFilter === 'All'){
      return response.results;
    }
    return response.results.filter((user:User) => user.gender === genderFilter);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};